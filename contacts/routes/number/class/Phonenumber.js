var md5 = require('md5');

class Phonenumber {
 
    addSQL(phonenumber,name,user_id) {
        let sql = 'INSERT INTO numbers (phonenumber,name,user_id) VALUES("'+phonenumber+'","'+name+'","'+user_id+'")';
        return sql;           
    }
 
    deleteSQL(id) {
        let sql = 'DELETE FROM numbers WHERE id = '+id;
        return sql;           
    }

    updateSQL(id,number,name) {
        let sql = 'UPDATE numbers SET phonenumber='+number+', name="'+name+'" WHERE id = '+id;
        return sql;           
    }

}
module.exports = Phonenumber;