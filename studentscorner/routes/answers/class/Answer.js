
class Answer {

    addAnswerSQL(answer,answeruser,questionid) {
        let sql = 'INSERT INTO answers (answer, answer_user,question_id) VALUES("'+answer+'",'+answeruser+','+questionid+')';
        return sql;           
    }
 
    deleteSQL(id) {
        let sql = 'DELETE FROM answers WHERE ans_id = '+id;
        return sql;           
    }

    updateSQL(id,answer,answer_user,question_id) {
        let sql = 'UPDATE answers SET answer="'+answer+'",answer_user="'+answer_user+'",question_id="'+question_id+'" WHERE ans_id = '+id;
        return sql;           
    }

}
module.exports = Answer;