const db = require('./db.config');
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;
const Questions =require('./questions');
const patients = require("./patients");
const completion = require('./completion');

const Imit = sequelize.define("imitations", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

Imit.hasMany(Questions);
Imit.belongsToMany(patients, {through: completion});

module.exports = Imit;
