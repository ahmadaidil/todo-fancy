'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// mongoose.connect('mongodb://localhost:27017/to-do');

var todoSchema = mongoose.Schema({
    userId: { type: Schema.ObjectId, ref: 'user' },
    task: String,
    completed: {type: Boolean, default: false}
})

var Todo = mongoose.model('todo', todoSchema);

module.exports = Todo;
