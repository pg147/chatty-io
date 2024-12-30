import { generateToken } from "../lib/utils.js";
import User from "../models/users.model.js";
import bcrypt from "bcryptjs";
import cloudinary from "../lib/cloudinary.js";

export const signup = async (req, res) => {
    const { name, email, password, profilePic } = req.body;

    try {
        if (!name || !email || !password) {
            res.status(400).json({ message: "All fields are required !" });
        }

        // Validating password length
        if (password.length < 6) {
            res.status(400).json({ message: "Password length should be greater than 6" });
        }

        // Checking if user already exists
        const user = await User.findOne({ email });

        // If exists then throw alert
        if (user) res.status(400).json({ message: `User with email ${email} already exists` });

        const salt = await bcrypt.genSalt(10); // Creating a salt for password
        const hashedPassword = await bcrypt.hash(password, salt); // Hashing the password with generated salt

        const newUser = new User({
            name: name,
            email: email,
            password: hashedPassword,
            profilePic: profilePic
        });

        if (newUser) {
            // Generate JWT Token and save user to DB
            generateToken(newUser._id, res);
            await newUser.save();

            // Send success status 
            res.status(201).json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                profilePic: newUser.profilePic
            });

        } else {
            res.status(400).json({ message: "Invalid user data" });
        }
    } catch (error) {
        console.log(`Error creating user : ${error}`);
        res.status(500).json({ message: "Internal server error. " });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user
        const user = await User.findOne({ email });

        // If user doesn't exist, return
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials !" });
        }

        // Checking password
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        // If password incorrect, return
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials !" });
        }

        // If correct, generate token and send success status
        generateToken(user._id, res);
        res.status(201).json({ message: `Welcome ${user.email} !` });

    } catch (error) {
        console.log(`Error finding the user : ${error}`);
        res.status(500).json({ message: "Internal server error. " });
    }
}

export const logout = (req, res) => {
    try {
        // Removing cookie to destroy session 
        res.cookie("us_er_tok_en", "", { maxAge: 0 });
        res.status(201).json({ message: "You were logged out successfully!" });
    } catch (error) {
        console.log(`Error logging out : ${error}`);
        res.status(500).json({ message: "Internal server error. " });
    }
}

export const update = async (req, res) => {
    const { profilePic } = req.body;
    const userId = req.user._id; // possible due to the middleware (protectedRoute)

    try {
        if (!profilePic) {
            return res.status(400).json({ message: "Profile pic is required!" });
        }

        // Uploading profile pic to Cloudinary
        const updatedResponse = await cloudinary.uploader.upload(profilePic);
        // Updating users profile pic in DB
        const updateProfile = await User.findByIdAndUpdate(userId, { profilePic: updatedResponse.secure_url }, { new: true });
        
        res.status(201).json(updateProfile);
    } catch (error) {
        console.log("Error updating profile : ", error);
        res.status(500).json({ message: "Internal server error."});
    }   
}

export const checkAuth = (req, res) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        console.log("Error checking user : ", error);
        res.status(500).json({ message: "Internal server error." });
    }
}