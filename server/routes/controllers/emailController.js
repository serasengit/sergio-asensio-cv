// Import configMensage module
const configMensaje = require('../../modules/configMensaje');

// Send an email.
exports.send_email = function (req, res, next) {
    try {
        const mail = new configMensaje(req.body);
        mail.transporter.sendMail(mail.mailOptions, function (err, info) {
            if (err) {
                return next(err);
            } else {
                return res.status(200).send({ result: 'Email was sent succesfully!' });
            }
        });
    } catch (err) {
        return next(err);
    }
};
