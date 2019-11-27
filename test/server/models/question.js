'use strict';

module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('question', {
    text: DataTypes.STRING
  }, {
    underscored: true
  });
  Question.associate = function (models) {
    Question.hasMany(models.Answer)
  };
  return Question;
};
