import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/User.js';

// Register
export const register = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (password.length < 6) return res.status(400).send('Password must be at least 6 characters long');

        const emailUserExists = await User.findOne({ email });

        if (emailUserExists) return res.status(409).send('Email already registered');

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            email,
            password: hashedPassword
        });

        await newUser.save();

        return res.status(201).json({
            message: 'Registration Successfully'
        });;
    } catch (error) {
        return res.status(500).send('Server Error');
    }
};

// Login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const emailUserExists = await User.findOne({ email });

        if (!emailUserExists) return res.status(401).send('Invalid credentials');

        const validPassword = await bcrypt.compare(
            password,
            emailUserExists.password
        );

        if (!validPassword) return res.status(401).send('Invalid credentials');

        const token = jwt.sign(
            { id: emailUserExists._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.cookie('token', token, {
            httpOnly: true,
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 1000
        });

        return res.status(200).json({
            message: 'Login Successful'
        });
    } catch (error) {
        return res.status(500).send('Server Error');
    }
};

// Profile
export const profile = async (req, res) => {
    try {
        const user = await User.findById(req.userId)

        if (!user) return res.status(404).send('User not found');

        return res.status(200).json({
            id: user._id,
            email: user.email
        })
    } catch (error) {
        return res.status(500).send('Server Error')
    }
};

// Logout
export const logout = (req, res) => {
    res.clearCookie('token', {
        httpOnly: true,
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        secure: process.env.NODE_ENV === 'production'
    });

    return res.status(200).json({
        message: 'Logout Successful'
    });
};