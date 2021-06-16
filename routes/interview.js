    const express = require('express');
    var router = express.Router();
    var url = require('url');

    router.use(function(req, res){
    //Routes for get function
    if(req.method=="GET")
    {
        switch(req.url){
            case '/view': res.render('index');
                        break;
                default: res.render('404');break;
                            }
    }
    //Routes for post function
    if(req.method=="POST")
    {
        switch(req.url){
            case '/view': res.render('index');break;
                default: res.render('404');break;
                            }
    }
    });
    module.exports = router;