const db = require('./db.config');
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;

const Patients = sequelize.define('patients', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  telephone: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  password: {
    type: Sequelize.INTEGER,
  }
});

module.exports = Patients;

