import User from "../models/users.model.js";
import bcrypt from "bcryptjs";

// Signup 
export const signup = async (req, res) => {
    const { name, email, password, profilePic } = req.body;

    try {
        // Validating password length
        if (password.length < 6) {
            res.status(400).json({ message : "Password length should be greater than 6" });
        }

        // Checking if user already exists
        const user = await User.findOne({ email });

        // If exists then throw alert
        if(user) res.status(400).json({ message : `User with email ${email} already exists` });

        const salt = await bcrypt.genSalt(10); // Creating a salt for password
        const hashedPassword = await bcrypt.hash(password, salt); // Hashing the password with generated salt

    } catch (error) {
        
    }
}

// Login
export const login = (req, res) => {
    res.send("Login route");
}

// Logout
export const logout = (req, res) => {
    res.send("Logout route");
}
