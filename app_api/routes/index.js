var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
    secret: 'QW_ERTY',
    userProperty: 'payload'
});

//var ctrlprofile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
 

// authentication
router.get('/register', ctrlAuth.register);
router.get('/login', ctrlAuth.login);

module.exports = router;