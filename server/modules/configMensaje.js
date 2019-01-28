const nodemailer = require('nodemailer');
module.exports = function (formulario, emailAdress, emailPass, attachementList) {
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
        attachments: attachementList

    };
} 
