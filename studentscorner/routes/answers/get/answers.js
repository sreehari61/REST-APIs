const express = require('express');
const router = express.Router();
const mysqlconnection = require('../../../../mysqlconnection');

router.get('/',(req, res, next) =>{
    mysqlconnection.query("SELECT answer from answers",(err, rows,fields)=>{
        if(!err){
            res.send(rows);
        }
    });
});

module.exports = router;