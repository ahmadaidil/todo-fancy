'use strict'
//All Dependencies
const express = require('express'),
      path = require('path'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      //All Route Files
      index = require('./routes/index'),
      users = require('./routes/users'),
      auth = require('./routes/auth'),
      todo = require('./routes/todo'),
      //Express Instance
      app = express();

//load environment variables with dotenv
require('dotenv').config()

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

mongoose.connect('mongodb://ahmadaidil:ahmadaidil@todoo-shard-00-00-pgpza.mongodb.net:27017,todoo-shard-00-01-pgpza.mongodb.net:27017,todoo-shard-00-02-pgpza.mongodb.net:27017/to-do?ssl=true&replicaSet=todoo-shard-0&authSource=admin');

app.use('/index', index)
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/todo', todo);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {}
  });
});


module.exports = app;
