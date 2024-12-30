import User from "../models/users.model.js";

export const getUsersForSideBar = async (req, res) => {
    try {
        const loggedInUser = req.user._id;

        // Filter users
        const filteredUsers = await User.find({ _id: { $ne: loggedInUser } }).select("-password");

        // If no users exist
        if (!filteredUsers) {
            return res.status(400).json({ message: "No users found!"});
        }

        // If exists
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error finding users ", error);
        res.status(500).json({message: "Internal server error."});
    }
}