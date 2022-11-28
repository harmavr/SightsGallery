const express = require('express');
const passport = require('passport');
const router = express.Router();
const catchAsync = require('../utils/catchAsync')
const users = require('../controllers/users')


router.get('/register',users.register);

router.post('/register',catchAsync(users.registerUser ));

router.get('/login',users.login)

router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.loginRedirect)

router.get('/logout',users.logout );


module.exports = router;