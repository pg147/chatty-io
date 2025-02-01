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

const allowedOrigins = [
    'http://localhost:4173', // For development
    'https://chattyio.site',  // Production
    'https://www.chattyio.site'
];

// CORS 
app.use(cors({
    origin: function (origin, callback) {  // function for dynamic origin checking
        if (!origin || allowedOrigins.includes(origin)) { // Allow requests with no origin (e.g. Postman) and from allowed origins
            callback(null, true);
        } else {
            console.error("CORS Error: Origin not allowed:", origin); // Log the bad origin for debugging
            callback(new Error('Not allowed by CORS'));
        }
    },
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
