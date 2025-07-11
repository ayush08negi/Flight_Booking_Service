const express = require('express');

const bodyParser = require('body-parser')
const {PORT} = require('./config/serverConfig')
const {createChannel,subscribeMessage}= require('./utils/messageQueue')

const TickerController= require('./controllers/ticket-controller')
const EmailService = require('./services/email-service')

// const { sendBasicEmail } = require('./services/email-service')
// const cron = require('node-cron');

const jobs = require('./utils/job');
const {REMINDER_BINDING_KEY} =  require('./config/serverConfig')
const setupAndStartServer = async()=>{
   const app = express();
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended:true}));
    
   const channel = await createChannel();
   subscribeMessage(channel,EmailService.subscribeEvents,REMINDER_BINDING_KEY);


   app.listen(PORT,()=>{
        console.log(`Server started at port ${PORT}`);
      //   jobs();
   })
}

setupAndStartServer();