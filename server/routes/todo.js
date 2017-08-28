'use strict'
const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController')

router.post('/create', todoController.createTodo);
router.get('/searchId', todoController.searchId);
router.put('/update/:id', todoController.updateTodo);
router.put('/updateComplete/:id', todoController.updateComplete);
router.delete('/remove/:id', todoController.removeTodo);

module.exports = router;
