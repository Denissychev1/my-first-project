const Question = require('../models').question;
const Imitation = require('../models').imitation;

exports.getquestion = (req, res) => {
  Question.findAll().then(data => {
    res.send(
      data
    );
  }).catch(err => console.log(err));
};

exports.findQuestions = async (req, res) => {
  const id = req.query.id;
  if (!id) {
    return res.status(400).send('Не передан параметр id');
  }
  const imitation = await Imitation.findByPk(id);
  const questions = await imitation.getQuestions();
  res.send(questions);
};
