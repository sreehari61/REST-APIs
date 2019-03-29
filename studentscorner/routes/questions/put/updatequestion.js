const express = require('express');
const router = express.Router();
const mysqlconnection = require('../../../../mysqlconnection');
const Question = require('../class/Question');



router.put('/:id',(req, res, next) =>{
    var user = new Question();
    mysqlconnection.query(user.updateSQL(req.params.id,req.body.question, req.body.questionuser),(err, results,fields)=>{
        if(!err){
            res.send("question updated");
        }
        else{
            res.send(err);
        }
    });
});

module.exports = router;
