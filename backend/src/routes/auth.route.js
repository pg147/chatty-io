import express from 'express';

const router = express.Router(); // Initialized Router

// Auth Routes
router.get('/signup', (req, res) => {
    res.send("Signup route.");
});

router.get('/login', (req, res) => {
    res.send("Login route.");
});

router.get('/logout', (req, res) => {
    res.send("Logout route.");
});

export default router;