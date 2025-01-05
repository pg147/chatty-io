// Dependencies
import express from 'express'; 
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// DB Connection function
import { connectDB } from './lib/db.js';

// Routers
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';

dotenv.config(); // For using env variables

const app = express(); // initialized express app
const PORT = process.env.PORT; // defined PORT 

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

// Server
app.listen(PORT, () => {
    console.log(`Server running at : ${PORT}`);
    connectDB();
})