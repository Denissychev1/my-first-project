const db = require('./db.config');
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;

const Imit = sequelize.define("imitations", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  question: {
    type: Sequelize.STRING,
    allowNull: false
  },
  answers: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
});


module.exports = Imit;
