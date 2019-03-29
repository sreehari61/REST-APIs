const express = require('express');
const router = express.Router();
const mysqlconnection = require('../../../../mysqlconnection');
const Answer = require('../class/Answer');



router.post('/',(req, res, next) =>{
    var answer = new Answer();
    mysqlconnection.query(answer.addAnswerSQL(req.body.answer, req.body.answeruser,req.body.questionid),(err, results,fields)=>{
        if(!err){
            res.send("Answer inserted");
        }
    });
});

module.exports = router;
