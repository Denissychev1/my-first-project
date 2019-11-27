const Answers = require('../models').answer;
const Question =require('../models').question;

exports.getAnswer = (req, res) => {
  Answers.findAll({raw: true}).then(data => {
    res.send(
      data
    );
  }).catch(err => console.log(err));
};
exports.findAnswer = async (req, res) => {
  const id = req.query.id;
  if (!id) {
    return res.status(400).send('Не передан параметр id');
  }
  const question = await Question.findByPk(id);
  const questions = await question.getAnswers();
  res.send(questions);
};

