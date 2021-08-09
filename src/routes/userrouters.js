const express = require('express');
const router = new express.Router();
const ufxn = require('../controllers/usercontroller');

router.post('/register',ufxn.newuser);

router.post('/login',ufxn.login);
module.exports = router;