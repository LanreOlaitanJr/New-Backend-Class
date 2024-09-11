const User = require('../models/userModel');
const generateToken = require('../utils/generateToken')

const registerUser = async (req, res) => {
    const { firstName, lastName, email, phone, password } = req.body;

    try {
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = await User.create({ firstName, lastName, email, phone, password });
        if (user) {
        // return res.status(201).json({ message: 'User registered successfully' });
        const token = generateToken(user._id)
        res.cookies("jwt", token, {
            httpOnly: true,
            sameSite: "strict",
            maxAge: 30 * 24 * 60 * 1000,
        })
        res.status(201).json({
            message: "user registered successfully",
            user,
            token
        })
    }
    } catch (error) {
        res.status(400).json({ error: 'Invalid user data' });
    }
};

module.exports = {  registerUser };
