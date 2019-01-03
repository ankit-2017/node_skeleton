var nodemailer = require ('nodemailer');

exports.sendMail=(mailOptions,callBack)=>{
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: ENV.MAIL_HOST,
        port: ENV.MAIL_PORT,
        secure: ENV.MAIL_SECURE, // true for 465, false for other ports
        auth: {
            user: ENV.MAIL_USERNAME, 
            pass: ENV.MAIL_PASSWORD
        }
    });
    // send mail with defined transport object
    return transporter.sendMail(mailOptions,callBack);
}

exports.randomString = (len, charSet) => {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz,randomPoz+1);
    }
    return randomString;
}

exports.dataParse = (data) => {
    let data_stringify = JSON.stringify(data);
    let parseData = JSON.parse(data_stringify)
    return parseData;
}