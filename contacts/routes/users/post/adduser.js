const express = require('express');
const router = express.Router();
const mysqlconnection = require('../../../../mysqlconnection');
const User = require('../class/User');



router.post('/',(req, res, next) =>{
    var user = new User();
    mysqlconnection.query(user.addUserSQL(req.body.username),(err, results,fields)=>{
        if(!err){
            res.send("user inserted");
        }
        else{
            res.send(err);
        }
    });
});

module.exports = router;
