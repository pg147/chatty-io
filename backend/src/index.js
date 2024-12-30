// Dependencies
import express from 'express'; 
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

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

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);

// Server
app.listen(PORT, () => {
    console.log(`Server running at : ${PORT}`);
    connectDB();
})