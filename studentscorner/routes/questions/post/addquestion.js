const express = require('express');
const router = express.Router();
const mysqlconnection = require('../../../../mysqlconnection');
const Question = require('../class/Question');



router.post('/',(req, res, next) =>{
    var question = new Question();
    mysqlconnection.query(question.addQuestionSQL(req.body.question, req.body.questionuser),(err, results,fields)=>{
        if(!err){
            res.send("Question inserted");
        }
    });
});

module.exports = router;
