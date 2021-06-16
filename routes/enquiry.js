const express = require('express');
const venom = require('venom-bot');
var router = express.Router();
var url = require('url');

router.use(function(req, res){
   //Routes for get function
if(req.method=="GET")
{
    switch(req.url){
        case '/view': res.render('index');
                      break;
        case '/add': res.render('add_enquiry');
                      break;
        case '/profile':res.render('profile');
                      break;              
             default: res.render('404');break;
                        }
}
//Routes for post function
if(req.method=="POST")
{
    switch(req.url){
        case '/view': res.render('index');break;
        case '/send_whatsapp':
        console.log(req.body)    
        venom
        .create('bot')//change name for new connection
        .then((client) =>{
            try{
                client.sendText(req.body.number,req.body.text);
            }catch(e)
            {console.log("unsend")}
           
        });break;
         default: res.render('404');break;
                        }
}
});
module.exports = router;