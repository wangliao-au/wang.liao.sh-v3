import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/user';
dotenv.config();
const secret: string = process.env.SESSION_SECRET || '';

const router = express.Router();

router.post('/signup', async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ email, password: hashedPassword });

    try {
        await user.save();
        res.status(201).json({ message: 'Welcome to the club!' });
    }
    catch (e: any) {
        res.status(400).json({ message: e.message });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(400).json({ message: 'User not found' });
    } else if (!await bcrypt.compare(password, user.password)) {
        return res.status(400).json({ message: 'Invalid credentials' });
    } else {
        const token = jwt.sign({ _id: user._id }, secret);
        return res.status(200).json({ token, message: 'Welcome back!' });
    }
});

router.get('/protected', authenticate, async (req, res) => {
    res.send('You have reached the protected endpoint!');
});

function authenticate(req: any, res: any, next: any) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.sendStatus(401);
    }

    jwt.verify(token, secret, (err: any, user: any) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

export default router;
