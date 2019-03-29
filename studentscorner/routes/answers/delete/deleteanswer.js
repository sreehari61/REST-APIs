const express = require('express');
const router = express.Router();
const mysqlconnection = require('../../../../mysqlconnection');
const Answer = require('../class/Answer');



router.delete('/:id',(req, res, next) =>{
    var answer = new Answer();
    mysqlconnection.query(answer.deleteSQL(req.params.id),(err, results,fields)=>{
        if(!err){
            res.send("answer deleted");
        }
        else{
            res.send(err);
        }
    });
});

module.exports = router;
