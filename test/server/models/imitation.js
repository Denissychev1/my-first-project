'use strict';
module.exports = (sequelize, DataTypes) => {
  const imitation = sequelize.define('imitation', {
    name: DataTypes.STRING
  }, {
    underscored: true,
  });
  imitation.associate = function(models) {
    imitation.belongsToMany(models.patient,{through: 'completion', foreignKey: 'imitation_id'});
    imitation.hasMany(models.question);
  };
  return imitation;
};
