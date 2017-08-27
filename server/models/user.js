'use strict'

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/to-do');

var userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    secretKey: String
})

var User = mongoose.model('user', userSchema);


module.exports = User;
