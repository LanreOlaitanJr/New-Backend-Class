const express = require('express');
const { registerUser } = require('../controllers/userController');
const router = express.Router();

// Define the /register route for POST requests
router.post('/register', registerUser);

module.exports = router;
