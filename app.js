const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Initialize express
const app = express();

// Load environment variables
dotenv.config();
const PORT = process.env.PORT || 5000;

// Import and connect to the database
const connectDB = require('./db/db');
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

// Testing general route
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to my server' });
});

// Import user route
const userRoute = require('./routes/userRoutes');
app.use('/api/users', userRoute);

// Listen for requests
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
