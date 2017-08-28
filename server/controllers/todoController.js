const todo = require('../models/todo');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

// router.use((req, res, next) => {
//
// })

exports.createTodo = (req, res) => {
  jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, decoded)=>{
    if(decoded == undefined) res.send('wrong token');
    else
      todo.create({
        userId : decoded.userId,
        task : req.body.task
      }, (err, result)=>{
        if(err) res.send(err);
        else res.json(result);
      });
  });
}

exports.searchId = (req, res) => {
  jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, decoded)=>{
    //console.log(decoded);
    if(decoded == undefined) res.send('wrong token');
    else
      todo.find({
        userId : decoded.userId
      }, (err, result)=>{
        if(err) res.send(err);
        else res.json(result);
      });
      // todo.find({
      //   userId: decoded.userId
      // })
      // .populate('userId')
      // .exec((err, result)=>{
      //   if(err) res.send(err);
      //   else res.json(result);
      // })
  });
}

exports.updateTodo = (req, res) => {
  jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, decoded)=>{
    if(decoded ==  undefined) res.send('wrong token');
    else
      todo.updateOne({
        _id : req.params.id
      }, {
        task : req.body.task
      }, (err, result)=>{
        if(err) res.send(err);
        else res.json(result);
      })
  })
}

exports.updateComplete = (req, res) => {
  jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, decoded)=>{
    if(decoded ==  undefined) res.send('wrong token');
    else
      todo.findOne({
        _id : req.params.id
      }, (err, result)=>{
        if(err) res.send('todo not found', err);
        else
          if(result.completed){
            todo.updateOne({
              _id : req.params.id
            }, {
              completed : false
            }, (err, result)=>{
              if(err) res.send(err);
              else res.json(result);
            })
          }
          else{
            todo.updateOne({
              _id : req.params.id
            }, {
              completed : true
            }, (err, result)=>{
              if(err) res.send(err);
              else res.json(result);
            })
          }
      })
  })
}

exports.removeTodo = (req, res) => {
  jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, decoded)=>{
    if(decoded ==  undefined) res.send('wrong token');
    else
      todo.deleteOne({
        _id : req.params.id
      }, (err, result)=>{
        if(err) res.send(err)
        else res.json(result)
      })
  })
}
