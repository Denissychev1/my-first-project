const Questions = require('../models').question;
const Answers = require('../models').answer;

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
  const questions = await Questions.findByPk(id);
  const answers = await questions.getAnswers();
  res.send(answers);
};

