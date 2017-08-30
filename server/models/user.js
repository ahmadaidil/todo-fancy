'use strict'

var mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/to-do');

var userSchema = mongoose.Schema({
    name: String,
    username: {type: String, unique: true, required: true},
    email: {type: String, unique:true, required:true},
    password: {type: String, required:true},
    secretKey: String
})

var User = mongoose.model('user', userSchema);


module.exports = User;
