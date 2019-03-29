const express = require('express');
const router = express.Router();
const mysqlconnection = require('../../../../mysqlconnection');
const Question = require('../class/Question');



router.delete('/:id',(req, res, next) =>{
    var user = new Question();
    mysqlconnection.query(user.deleteSQL(req.params.id),(err, results,fields)=>{
        if(!err){
            res.send("question deleted");
        }
        else{
            res.send(err);
        }
    });
});

module.exports = router;
