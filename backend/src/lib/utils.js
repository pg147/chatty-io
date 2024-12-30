import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });

    if (token) {
        res.cookie("user", token, {
            maxAge: 24 * 7 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV !== "development"
        })
    } else {
        res.status(400).json({ message : "Error generating token!" });
        return;
    }

    return token;
}