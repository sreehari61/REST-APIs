var md5 = require('md5');

class Book {
 
    addSQL(isbn,bookname,bookauthor) {
        let sql = 'INSERT INTO books (isbn,bookname,bookauthor) \
                    VALUES("'+isbn+'","'+bookname+'","'+bookauthor+'")';
        return sql;           
    }
 
    deleteSQL(id) {
        let sql = 'DELETE FROM books WHERE id = '+id;
        return sql;           
    }

    updateSQL(id,isbn,bookname,bookauthor) {
        let sql = 'UPDATE books SET isbn='+isbn+',bookname="'+bookname+'",bookauthor="'+bookauthor+'" WHERE id = '+id;
        return sql;           
    }

}
module.exports = Book;