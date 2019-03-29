const express = require('express');
const router = express.Router();
const mysqlconnection = require('../../../../mysqlconnection');
const Book = require('../class/Book');



router.post('/',(req, res, next) =>{
    var book = new Book();
    mysqlconnection.query(book.addSQL(req.body.isbn,req.body.bookname,req.body.bookauthor),(err, results,fields)=>{
        if(!err){
            res.send("book inserted");
        }
        else{
            res.send(err);
        }
    });
});

module.exports = router;
