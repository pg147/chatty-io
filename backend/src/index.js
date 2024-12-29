import express from 'express'; // express module
import dotenv from 'dotenv';

import authRoutes from './routes/auth.route.js';
import { connectDB } from './lib/db.js';

dotenv.config(); // For using env variables

const app = express(); // initialized express app
const PORT = process.env.PORT; // defined PORT 

// JSON Middleware
app.use(express.json());

// Route
app.use('/api/auth', authRoutes);

// Server
app.listen(PORT, () => {
    console.log(`Server running at : ${PORT}`);
    connectDB();
})