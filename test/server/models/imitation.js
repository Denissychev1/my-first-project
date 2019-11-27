'use strict';
const patient = require('./patient');
const question= require('./question')
module.exports = (sequelize, DataTypes) => {
  const imitation = sequelize.define('imitation', {
    name: DataTypes.STRING
  }, {
    underscored: true,
  });
  imitation.associate = function(models) { imitation.belongsToMany(patient,{through: 'completion', foreignKey: 'imitationId'})
    imitation.hasMany(question)// associations can be defined here
  };
  return imitation;
};
