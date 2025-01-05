// routes/users.js
const router = require('express').Router();
const { User, validateUser } = require('../models/user');
const bcrypt = require('bcrypt');

// User registration route
router.post('/', async (req, res) => {
    try { 
        const { error } = validateUser(req.body);
        if (error) return res.status(400).send({ message: error.details[0].message });

        const userExists = await User.findOne({ email: req.body.email });
        if (userExists) return res.status(409).send({ message: 'User with this email already exists' });

        const usernameExists = await User.findOne({ username: req.body.username });
        if (usernameExists) return res.status(409).send({ message: 'Username already exists' });

        const salt = await bcrypt.genSalt(Number(process.env.SALT) || 10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({ ...req.body, password: hashPassword });
        await newUser.save();

        res.status(201).send({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

module.exports = router;
