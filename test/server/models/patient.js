'use strict';

module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: DataTypes.STRING,
    age: DataTypes.INTEGER,
    telephone: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    underscored: true,
  });
  Patient.associate = function (models) {
    Patient.belongsToMany(models.imitation, {
      through: 'completion',
      foreignKey: 'patientId'
    })
  };
  return Patient;
};
