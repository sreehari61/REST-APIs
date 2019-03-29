const express = require('express');
const router = express.Router();
const mysqlconnection = require('../../../../mysqlconnection');
const Phonenumber = require('../class/Phonenumber');



router.delete('/:id',(req, res, next) =>{
    var phonenumber = new Phonenumber();
    mysqlconnection.query(phonenumber.deleteSQL(req.params.id),(err, results,fields)=>{
        if(!err){
            res.send("phonenumber deleted");
        }
        else{
            res.send(err);
        }
    });
});

module.exports = router;
