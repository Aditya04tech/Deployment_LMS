// routes/auth.js
const router = require('express').Router();
const { User } = require('../models/user');
const Joi = require('joi');
const bcrypt = require('bcrypt');

// Validate login data
const validateLogin = (data) => {
    const schema = Joi.object({ 
        username: Joi.string().required().label('Username'),
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().required().label('Password'),
    });
    return schema.validate(data);
};

// User login route
router.post('/', async (req, res) => {
    try {
        const { error } = validateLogin(req.body);
        if (error) return res.status(400).send({ message: error.details[0].message });

        const user = await User.findOne({ 
            $or: [{ username: req.body.username }, { email: req.body.email }] 
        });

        if (!user) return res.status(401).send({ message: 'Invalid Username, Email or Password' });

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(401).send({ message: 'Invalid Username, Email or Password' });

        const token = user.generateAuthToken();
        res.status(200).send({ data: token, message: 'Login successful' });
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

module.exports = router;
