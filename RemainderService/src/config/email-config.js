// create a transport object
const {EMAIL_ID,EMAIL_PASS} = require('./serverConfig');
const nodemailer = require('nodemailer');
const sender = nodemailer.createTransport({  
     service: 'Gmail',
     auth:{
        user: EMAIL_ID,
        pass: EMAIL_PASS
     }
})  


module.exports = sender;