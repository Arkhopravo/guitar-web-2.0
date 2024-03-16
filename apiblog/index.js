import express,{json} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {connect} from 'mongoose'
import cookieParser from 'cookie-parser';
import stripe from 'stripe';

import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js'


const app = express();
const PORT = process.env.PORT || 4000;

dotenv.config();
app.use(cors());
app.use(json());
app.use(cookieParser());


connect(
    process.env.MONGO_URL
    )
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(err => {
        console.log(err);
        
    })
    
    app.use('/api/user',userRoutes)
    app.use('/api/auth', authRoutes)
   
    
    
    
    app.use((err, req, res, next) => {
        const statusCode = res.statusCode || 500;
        const message = err.message || 'Internal Server Error';
        res.status(statusCode).json({
            success: false,
            statusCode,
            message
        })
    })
    
    // Routes
    app.get('/', (req, res) => {
        res.send('Hello, this is a sample server!');
    });

    // console.log(process.env.JWT_SECRET)
    
    // Sample API route for Google authentication
    
    const stripeInstance = stripe('sk_test_51LVV9TSIAChIdT5GIwm9vsklCMNQkXMJDRz0hfPxw4EyZmcjlIqfTBx2s0MvlYoSUIeSriLqgvCJn3n7E29chtrx00pyTzZWtf');

    
    // Start server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
