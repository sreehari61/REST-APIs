const express = require('express');
const router = express.Router();
const mysqlconnection = require('../../../../mysqlconnection');
const Book = require('../class/Book');



router.delete('/:id',(req, res, next) =>{
    var book = new Book();
    mysqlconnection.query(book.deleteSQL(req.params.id),(err, results,fields)=>{
        if(!err){
            res.send("book deleted");
        }
        else{
            res.send(err);
        }
    });
});

module.exports = router;
