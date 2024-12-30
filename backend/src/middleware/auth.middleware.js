import jwt from "jsonwebtoken";
import User from "../models/users.model.js";

export const protectRoute = async (req, res) => {
    // Extracting token 
    const token = req.cookies.us_er_tok_en;

    try {
        // If no token exists
        if (!token) {
            return res.status(401).json({ message: "Unauthorized access." });
        }

        // Decoding token if it exists
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        if (!decodedToken) {
            return res.status(401).json({ message: "Invalid token !" });
        }

        // Extracting userId with the decoded token
        const user = await User.findById(decodedToken.userId).select("-password");

        // If user with the ID doesn't exist
        if (!user) {
            return res.status(401).json({ message: "User not found! "});
        }
        
        req.user = user;
        
        next();
    } catch (error) {
        console.log("Error : ",error);
        return res.status(500).json({ message: "Internal server error."});
    }
}