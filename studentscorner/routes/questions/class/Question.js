
class Question {

 
    addQuestionSQL(question,questionuser) {
        let sql = 'INSERT INTO questions (question, question_user) \
                   VALUES("'+question+'","'+questionuser+'")';
        return sql;           
    }
 
    deleteSQL(id) {
        let sql = 'DELETE FROM questions WHERE question_id = '+id;
        return sql;           
    }

    updateSQL(id,question,question_user) {
        let sql = 'UPDATE questions SET question="'+question+'",question_user="'+question_user+'" WHERE question_id = '+id;
        return sql;           
    }
}
module.exports = Question;