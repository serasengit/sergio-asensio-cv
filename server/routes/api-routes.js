// Dependencies
const router = require('express').Router();
const isAuthenticated = require('../middlewares/ensureAuthentication').isAuthenticated;
const email_controller = require('./controllers/emailController');
const Config = require('../db/models/config');
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './server/utils/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
var upload = multer({ storage: storage });

/// EMAIL ROUTES ///

// POST request for sending an email.
router.post('/formulario', upload.array("uploads[]", 12), isAuthenticated, email_controller.send_email);

module.exports = router;
