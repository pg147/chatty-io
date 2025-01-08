import User from "../models/users.model.js";
import Message from "../models/messages.model.js";
import cloudinary from '../lib/cloudinary.js';
import { getUserSocketId, io } from "../lib/socket.js";

export const getUsersForSideBar = async (req, res) => {
    try {
        const loggedInUser = req.user._id;

        // Filter users
        const filteredUsers = await User.find({ _id: { $ne: loggedInUser } }).select("-password");

        // If no users exist
        if (!filteredUsers) {
            return res.status(400).json({ message: "No users found!" });
        }

        // If exists
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error finding users ", error);
        res.status(500).json({ message: "Internal server error." });
    }
}

export const getMessages = async (req, res) => {
    const myId = req.user._id;
    const { id: userToChat } = req.params;

    try {
        const messages = await Message.find({
            // Or condition -> For fetching msgs where either am the sender or receiver and vice-versa
            $or: [
                { senderId: myId, receiverId: userToChat },
                { senderId: userToChat, receiverId: myId }
            ]
        });

        if (!messages) {
            return res.status(400).json({ message: "No messages were found !" });
        }

        res.status(201).json(messages);
    } catch (error) {
        console.log('Error fetching messages : ', error);
        res.status(500).json({ message: "Internal server error!" });
    }
}

export const sendMessage = async (req, res) => {
    const { text, image } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let imageURL;

    try {
        if (image) {
            const uploadImage = await cloudinary.uploader.upload(image);
            imageURL = uploadImage.secure_url;
        }

        const newMessage = new Message({
            senderId: senderId,
            receiverId: receiverId,
            text: text,
            image: imageURL
        })

        await newMessage.save();

        const receiverSocketId = getUserSocketId(receiverId);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        res.status(201).json(newMessage);
    } catch (error) {
        console.log('Error sending message : ', error);
        res.status(500).json({ message: "Internal server error" });
    }
}