// Dependencies
const router = require('express').Router();
const isAuthenticated = require('../middlewares/ensureAuthentication').isAuthenticated;
const email_controller = require('./controllers/emailController');
const Config = require('../db/models/config');

/// EMAIL ROUTES ///

// POST request for sending an email.
router.post('/formulario', isAuthenticated, email_controller.send_email);

module.exports = router;
