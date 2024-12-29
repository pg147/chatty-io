// Express module
import express from 'express';

// Controller Logics
import { signup, login, logout } from '../controllers/auth.controller.js';

const router = express.Router(); // Initialized Router

// Auth Routes
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

export default router;