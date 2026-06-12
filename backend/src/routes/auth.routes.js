import { Router } from 'express';

import { register, login, profile, logout } from '../controllers/auth.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { validateAuthMiddleware } from '../middlewares/validateAuth.middleware.js';
import User from '../models/User.js';


const router = Router();

router.get('/', (req, res) => {
    res.send('Auth routes working');
});

router.post('/register', validateAuthMiddleware, register);

router.post('/login', validateAuthMiddleware, login);

router.get('/profile', authMiddleware, profile);

router.post('/logout', logout);

export default router;