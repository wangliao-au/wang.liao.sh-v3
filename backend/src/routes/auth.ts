import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import validator from 'validator';
import User from '../models/user';
dotenv.config();
const secret: string = process.env.SESSION_SECRET || '';

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Missing email or password' });
    }

    // Validate email format
    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }

    if (password !== req.body.confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    try {
        // Check if a user with the provided email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'Welcome to the club!' });
    } catch (e: any) {
        res.status(400).json({ message: e.message });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Missing email or password' });
    }

    // Validate email format
    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    } else if (!await bcrypt.compare(password, user.password)) {
        return res.status(400).json({ message: 'Invalid credentials' });
    } else {
        const token = jwt.sign({ _id: user._id }, secret);
        return res.json({ status: 200, token, message: 'Welcome back!' });
    }
});

router.get('/tokenValidation', authenticate, async (req: any, res: any) => {
    const u_id = req.user._id;
    const user = await User.findById(u_id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    const email = user.email;
    res.json({ status: 200, message: 'Valid token', email });
});

function authenticate(req: any, res: any, next: any) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.sendStatus(401);
    }

    jwt.verify(token, secret, (err: any, user: any) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        console.log('User authenticated via token', user);
        next();
    });
}

export default router;
