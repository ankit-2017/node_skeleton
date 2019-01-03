const mongoose = require('mongoose');
module.exports = new mongoose.Schema({
        username: String,
        email: String,
        name: String
    },
    { timestamps: true}
);