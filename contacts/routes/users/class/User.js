var md5 = require('md5');

class user {
 
    addUserSQL(name) {
        let sql = 'INSERT INTO users (username) VALUES("'+name+'")';
        return sql;           
    }
 
    deleteSQL(id) {
        let sql = 'DELETE FROM users WHERE user_id = '+id;
        return sql;           
    }

    updateSQL(id,username) {
        let sql = 'UPDATE users SET username="'+username+'" WHERE user_id = '+id;
        return sql;           
    }

}
module.exports = user;