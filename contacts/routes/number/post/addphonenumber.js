const express = require('express');
const router = express.Router();
const mysqlconnection = require('../../../../mysqlconnection');
const Phonenumber = require('../class/Phonenumber');



router.post('/',(req, res, next) =>{
    var phonenumber = new Phonenumber();
    mysqlconnection.query(phonenumber.addSQL(req.body.phonenumber,req.body.name,req.body.userid),(err, results,fields)=>{
        if(!err){
            res.send("phonenumber inserted");
        }
        else{
            res.send(err);
        }
    });
});

module.exports = router;
