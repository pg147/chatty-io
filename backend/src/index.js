import express from 'express'; // express module
import authRoutes from './routes/auth.route.js';

const app = express(); // initiating express app
const PORT = 5001; // defined PORT 

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server running at : ${PORT}`);
})