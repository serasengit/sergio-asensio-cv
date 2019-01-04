const nodemailer = require('nodemailer');
module.exports = function (formulario) {
    this.transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'maserasen@gmail.com',
            pass: 'aiocxarqbtcsuzrc'
        }
    });
    this.mailOptions = {
        from: formulario.nombre + '<' + formulario.email + '>',
        to: 'maserasen@gmail.com',
        subject: formulario.asunto,
        html: '<strong>Nombre:&nbsp;</strong>' + formulario.nombre + '<br/><br/><strong>E-mail:&nbsp;</strong>' + formulario.email + '<br/><br/><strong>Mensaje:&nbsp;</strong><br/><br/>' + formulario.mensaje

    };
}
