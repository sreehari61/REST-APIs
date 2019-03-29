const express = require('express');
const router = express.Router();
const mysqlconnection = require('../../../../mysqlconnection');
const Answer = require('../class/Answer');



router.put('/:id',(req, res, next) =>{
    var answer = new Answer();
    mysqlconnection.query(answer.updateSQL(req.params.id,req.body.answer, req.body.answeruser, req.body.questionid),(err, results,fields)=>{
        if(!err){
            res.send("answer updated");
        }
        else{
            res.send(err);
        }
    });
});

module.exports = router;
