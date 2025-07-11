const express = require('express');
const {PORT,FLIGHT_SERVICE_PATH} = require('./config/serverConfig');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index');
const multer = require('multer');
const upload = multer();

const app = express();
const db = require('./models/index')

const setUpAndStartServer = ()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))

    // app.get('/api/v1/home', (req,res)=>{
    //     return res.json({message:'Hitting the booking service'});
    // })
    app.use('/api',upload.none(),apiRoutes); 

    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`);

        if(process.env.DB_SYNC){
            db.sequelize.sync({alter:true});
        }
        // console.log(FLIGHT_SERVICE_PATH)
    })


}

setUpAndStartServer();