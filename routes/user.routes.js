const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
const { jwtVerify } = require('../middleware/auth');

router.post('/register', jwtVerify, userController.saveUser);
router.post('/login', userController.login);

module.exports.userRoutes = router;