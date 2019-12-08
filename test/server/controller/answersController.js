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

// Creation of Answer
exports.create = async (req, res) => {
  try {
    // Save to PostgreSQL database
    let answer = await Answers.create(req.body);
    // Send created pat to cl
    res.status(201).json(answer);
  } catch (err) {
    console.log(err);
    res.status(500).json({msg: "error", details: err});
  }
};


