'use strict'
const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController')

router.post('/create', todoController.createTodo);
router.get('/searchId', todoController.searchId);
router.post('/update/:id', todoController.updateTodo);
router.get('/updateComplete/:id', todoController.updateComplete);
router.get('/remove/:id', todoController.removeTodo);

module.exports = router;
