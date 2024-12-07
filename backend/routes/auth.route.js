import express from 'express';
import { login, logout, singup, refreshToken } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', singup);
router.post('/login', login);
router.post('/logout', logout);
router.post('/refresh-token', refreshToken);
//router.get('/profile', protedctRoute,getprofile)



export default router