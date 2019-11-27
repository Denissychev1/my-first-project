'use strict';
module.exports = (sequelize, DataTypes) => {
  const imitation = sequelize.define('imitation', {
    name: DataTypes.STRING
  }, {
    underscored: true,
  });
  imitation.associate = function(models) {
    imitation.belongsToMany(models.Patient,{through: 'completion', foreignKey: 'imitationId'});
    imitation.hasMany(models.Question);
  };
  return imitation;
};
