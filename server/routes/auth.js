'use strict'
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')


router.post('/signup', authController.signup);
router.post('/signin', authController.signin);
router.post('/signinFB', authController.signinFB);

module.exports = router;
