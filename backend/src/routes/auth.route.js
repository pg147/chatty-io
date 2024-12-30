// Express module
import express from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';

// Controller Logics
import { signup, login, logout, update, checkAuth } from '../controllers/auth.controller.js';

const router = express.Router(); // Initialized Router

// Auth Routes
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

router.put('/update-profile', protectRoute, update);

router.get('/check', protectRoute, checkAuth);

export default router;