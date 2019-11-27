'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('answer', {
    text: DataTypes.STRING,
    value: DataTypes.BOOLEAN
  }, {
    underscored: true,
  });
  Answer.associate = function(models) {
    // associations can be defined here
  };
  return Answer;
};
