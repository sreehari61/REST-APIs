const express = require('express');
const router = express.Router();
const mysqlconnection = require('../../../../mysqlconnection');
const Phonenumber = require('../class/Phonenumber');



router.put('/:id',(req, res, next) =>{
    var phonenumber = new Phonenumber();
    mysqlconnection.query(phonenumber.updateSQL(req.params.id,req.body.phonenumber,req.body.name),(err, results,fields)=>{
        if(!err){
            res.send("phonenumber updated");
        }
        else{
            res.send(err);
        }
    });
});

module.exports = router;
