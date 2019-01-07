const nodemailer = require('nodemailer');
module.exports = function (formulario, emailAdress, emailPass) {
    this.transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: emailAdress,
            pass: emailPass
        }
    });
    this.mailOptions = {
        from: formulario.name + '<' + formulario.email + '>',
        to: emailAdress,
        subject: formulario.subject,
        html: '<strong>Nombre:&nbsp;</strong>' + formulario.name + '<br/><br/><strong>E-mail:&nbsp;</strong>' + formulario.email + '<br/><br/><strong>Mensaje:&nbsp;</strong><br/><br/>' + formulario.message,
        attachments: [
            {   // utf-8 string as an attachment
                //filename: 'license.txt',
                //path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
            }
        ]

    };
} 
