'use strict';
const answer = require('./answer');
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('question', {
    text: DataTypes.STRING
  }, {
    underscored: true,
  });
  Question.associate = function(models) { Question.hasMany(answer, {as:'answer'})
    // associations can be defined here
  };
  return Question;
};
