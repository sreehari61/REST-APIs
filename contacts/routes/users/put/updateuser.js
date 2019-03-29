const express = require('express');
const router = express.Router();
const mysqlconnection = require('../../../../mysqlconnection');
const User = require('../class/User');



router.put('/:id',(req, res, next) =>{
    var user = new User();
    mysqlconnection.query(user.updateSQL(req.params.id,req.body.username),(err, results,fields)=>{
        if(!err){
            res.send("user updated");
        }
        else{
            res.send(err);
        }
    });
});

module.exports = router;
