import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import router from './src/routes/auth.routes.js';
import connectDB from './src/config/db.js';

dotenv.config();

async function startServer() {
    await connectDB();

    app.listen(5000, () => {
        console.log('Server running on port 5000');
    });
};

const app = express();

app.use(cors({
    origin: [
        'http://localhost:5173', 
        'https://auth-system-fullstack.vercel.app'
    ],
    credentials: true
}));


app.use(express.json());

app.use(cookieParser());

app.use('/api/auth', router);

app.get('/', (req, res) => {
    res.send('Backend funcionando');
});

startServer();