// db.js
const mongoose = require('mongoose');

module.exports = () => {
    const connectionParams = { useNewUrlParser: true, useUnifiedTopology: true };

    mongoose.connect(process.env.MONGO_URI, connectionParams)
        .then(() => console.log('Connected to the database successfully.'))
        .catch(error => console.error('Error connecting to the database:', error.message));
};
