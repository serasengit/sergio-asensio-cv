// Initialize express router
let router = require('express').Router();
// Import configMensage module
const configMensaje = require('./modules/configMensaje');

// Set default API response
router.post('/formulario', function (req, res, next) {
    try {
        var mail = new configMensaje(req.body);
        mail.transporter.sendMail(mail.mailOptions, function (err, info) {
            console.log('ERR::: ' + JSON.stringify(err));
            console.log('ERR::: ' + JSON.stringify(info));

            if (err) {
                return next(err);
            }
            else {
                return res.status(200).send();
            }
        });
    }
    catch (err) {
        return next(err);
    }
});
// Export API routes
module.exports = router;
