import express from 'express';
import session from 'express-session';
import cors from 'cors';
import mongoose, { ConnectOptions } from 'mongoose';
import authRoutes from './routes/auth';
import dotenv from 'dotenv';
dotenv.config();
const secret: string = process.env.SESSION_SECRET || '';

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} as ConnectOptions);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});


const app = express();

app.use(cors({ // Allow requests from http://localhost:3001
    origin: '*',
    credentials: true  // This allows cookies to be sent across origins
}));

// Custom middleware to log request and response details
app.use((req: any, res: any, next) => {
    const startTime: any = new Date();
    console.log(`[${startTime.toISOString()}] ${req.method} ${req.url}`);

    // Capture the original res.send function to log response status
    const originalSend = res.send;
    res.send = function (...args: any) {
        const endTime: any = new Date();
        const duration = endTime - startTime;
        console.log(`[${endTime.toISOString()}] Response status: ${res.statusCode}`);
        console.log(`Duration: ${duration}ms`);
        originalSend.apply(res, args);
    };

    next();
});

app.use(session({
    secret: secret, // for signing the session id cookie
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
}));
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json()); // for parsing application/json

app.use('/api/auth', authRoutes);

const PORT = 3206;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
