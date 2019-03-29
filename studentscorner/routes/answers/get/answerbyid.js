const express = require('express');
const router = express.Router();
const mysqlconnection = require('../../../../mysqlconnection');

router.get('/:id',(req, res, next) =>{
    mysqlconnection.query("SELECT * from answers where ans_id = ?",[req.params.id],(err, rows,fields)=>{
        if(!err){
            if(rows < 1)
                res.send("No Answer found");
            else
                res.send(rows);
        }
    });
});

module.exports = router;