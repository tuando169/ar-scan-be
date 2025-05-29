import { authController } from '../controllers/auth.controller.js';
import express from 'express';

const router = express.Router();

router.post('/login', authController.login);
router.post('/signup', authController.signUp);
router.patch('/change-password', authController.changePassword);

export default router;
