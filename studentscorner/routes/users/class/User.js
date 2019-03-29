var md5 = require('md5');

class user {
 
    addUserSQL(name,email,password) {
        let sql = 'INSERT INTO users (username, email, password) \
                   VALUES("'+name+'","'+email+'","'+md5(password)+'")';
        return sql;           
    }
 
    deleteSQL(id) {
        let sql = 'DELETE FROM users WHERE user_id = '+id;
        return sql;           
    }

    updateSQL(id,username,email,password) {
        let sql = 'UPDATE users SET username="'+username+'",email="'+email+'",password="'+md5(password)+'" WHERE user_id = '+id;
        return sql;           
    }

}
module.exports = user;