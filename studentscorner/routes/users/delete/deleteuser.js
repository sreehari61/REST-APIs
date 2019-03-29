const express = require('express');
const router = express.Router();
const mysqlconnection = require('../../../../mysqlconnection');
const User = require('../class/User');



router.delete('/:id',(req, res, next) =>{
    var user = new User();
    mysqlconnection.query(user.deleteSQL(req.params.id),(err, results,fields)=>{
        if(!err){
            res.send("user deleted");
        }
        else{
            res.send(err);
        }
    });
});

module.exports = router;
