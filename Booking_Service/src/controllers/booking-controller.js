const { StatusCodes } = require('http-status-codes');
const {BookingService} = require('../services/index')

const {createChannel,publishMessage} = require('../utils/messageQueue');
const {REMINDER_BINDING_KEY} = require('../config/serverConfig')

const bookingService = new BookingService();

class BookingController{

  constructor(channel){
    
  }

  async sendMessageToQueue (req,res){
      const channel = await createChannel();
      const payload = {
         data:{
          subject : 'This is a noti form queue',
          content: 'Somw queue will subscribe this',
          recepientEmail: 'negiayush0808@gmail.com',
          notificationTime : '2024-11-11 14:32:18'
         },
         service:'CREATE_TICKET'
      };
      publishMessage(channel,REMINDER_BINDING_KEY, JSON.stringify(payload));
      return res.status(200).json({
        message:'Successfully published the event'
      })
  }

   async create(req,res){
    try{
      const response = await bookingService.createBooking(req.body);

      return res.status(StatusCodes.OK).json({
        message : 'Successfully completed boooking',
        success: true,
        err: {},
        data:response
      })
   } catch(error){
       console.log('FORM BOOKING CONTROLLER',error);
       return res.status(error.statusCode).json({
           message : error.message,
           success: false,
           err: error.explanation,
           data:{}
         })
    }
   }
  }

 

module.exports =  BookingController;
