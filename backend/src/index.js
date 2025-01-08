// Dependencies
import express from 'express'; 
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';

import { app, server } from './lib/socket.js';

// DB Connection function
import { connectDB } from './lib/db.js';

// Routers
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';

dotenv.config(); // For using env variables

const PORT = process.env.PORT; // defined PORT 
const __dirname = path.resolve();

// app used here is from socket.js 

// JSON Middleware
app.use(express.json());

// Cookie Parser
app.use(cookieParser());

// CORS 
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    })
}

// Socket Server
server.listen(PORT, () => {
    console.log(`Server running at : ${PORT}`);
    connectDB();
})