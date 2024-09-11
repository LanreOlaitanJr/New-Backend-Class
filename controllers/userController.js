const User = require('../models/userModel');

const registerUser = async (req, res) => {
    const { firstName, lastName, email, phone, password } = req.body;

    try {
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = await User.create({ firstName, lastName, email, phone, password });
        return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        return res.status(400).json({ error: 'Invalid user data' });
    }
};

module.exports = {
    registerUser
};
