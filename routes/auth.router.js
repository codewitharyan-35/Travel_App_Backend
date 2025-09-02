const express = require("express");

const signupHandler = require('../controllers/signupController');
const loginHandler = require("../controllers/loginController");

const router = express.Router();

router.route("/register") //localhost/api/auth/register
    .post(signupHandler)

router.route("/login") //localhost/api/auth/login
    .post(loginHandler)

module.exports = router;