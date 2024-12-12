
import express from 'express';
import { signup } from '../controllers/user.js';
import { login,logout } from '../controllers/user.js';

const router = express.Router();


router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);




export default router;
