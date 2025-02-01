// Dependencies
import express from 'express'; 
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { app, server } from './lib/socket.js';

// DB Connection function
import { connectDB } from './lib/db.js';

// Routers
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';

dotenv.config(); // For using env variables

const PORT = process.env.PORT; // defined PORT 

// app used here is from socket.js 

// JSON Middleware
app.use(express.json());

// Cookie Parser
app.use(cookieParser());

// CORS 
app.use(cors({
    origin: ['http://localhost:4173', 'http://195.35.6.142:4173', 'http://chatty-io.prathmesh.dev'],
    credentials: true
}))

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

// Socket Server
server.listen(PORT, () => {
    console.log(`Server running at : ${PORT}`);
    connectDB();
})
