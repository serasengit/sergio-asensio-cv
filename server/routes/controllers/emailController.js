// Import configMensage module
const configMensaje = require('../../modules/configMensaje');
const Config = require('../../db/models/config');


// Send an email.
exports.send_email = async function (req, res, next) {
    try {
        return Config
            .query()
            .where('clave', 'email')
            .then((emailAddress) => {
                if (emailAddress && emailAddress[0]) {
                    return Config
                        .query()
                        .where('clave', 'email_pass')
                        .then((emailPass) => {
                            if (emailPass && emailPass[0]) {
                                //Attaching Files
                                var attachementList = [];
                                for (i = 0; i < req.files.length; i++) {
                                    attachementList.push({
                                        filename: req.files[i].originalname,
                                        path: req.files[i].path
                                    });
                                }
                                const mail = new configMensaje(req.body, emailAddress[0].value, emailPass[0].value, attachementList);

                                mail.transporter.sendMail(mail.mailOptions, function (err, info) {
                                    if (err) {
                                        return next(err);
                                    } else {
                                        return res.status(200).send({ result: 'Email was sent succesfully!' });
                                    }
                                });
                            } else {
                                return res.status(500).send('There was a problem trying to get the receiver data!');
                            }

                        });
                } else {
                    return res.status(500).send('There was a problem trying to get the receiver data!');
                }
            });
    } catch (err) {
        return next(err);
    }

};
