'use strict';
module.exports = (sequelize, DataTypes) => {
  const completion = sequelize.define('completion', {
    score: DataTypes.INTEGER,
  }, {
    underscored: true,
  });
  completion.associate = function(models) {

  };
  return completion;
};
