const dotenv = require('dotenv');
dotenv.config();

module.exports={
    PORT: process.env.PORT,
    EMAIL_ID : process.env.EAMIL_ID,
    EMAIL_PASS: process.env.EMAIL_PASS,
    EXCHANGE_NAME : process.env.EXCHANGE_NAME,
    REMINDER_BINDING_KEY:process.env.REMINDER_BINDING_KEY,
   
} 