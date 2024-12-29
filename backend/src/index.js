import express from 'express'; // express module
import dotenv from 'dotenv';

import authRoutes from './routes/auth.route.js';
import { connectDB } from './lib/db.js';

dotenv.config();

const app = express(); // initiating express app
const PORT = process.env.PORT; // defined PORT 

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server running at : ${PORT}`);
    connectDB();
})