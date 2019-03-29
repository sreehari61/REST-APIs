const express = require('express');
const router = express.Router();
const mysqlconnection = require('../../../../mysqlconnection');
const Book = require('../class/Book');



router.put('/:id',(req, res, next) =>{
    var book = new Book();
    mysqlconnection.query(book.updateSQL(req.params.id,req.body.isbn,req.body.bookname,req.body.bookauthor),(err, results,fields)=>{
        if(!err){
            res.send("book updated");
        }
        else{
            res.send(err);
        }
    });
});

module.exports = router;
