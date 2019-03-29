const express = require('express');
const router = express.Router();
const mysqlconnection = require('../../../../mysqlconnection');

router.get('/:id',(req, res, next) =>{
    var id = req.params.id;
    mysqlconnection.query('SELECT * from users where user_id = ? ',id,(err, rows,fields)=>{
        if(!err){
            if(rows < 1){
                res.send("No user found ");
            }
            else{
                res.send(rows);
            }
        }
    });
});

module.exports = router;