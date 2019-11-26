const db = require('./db.config');
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;

const Answers = sequelize.define("answers", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  answer: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  value: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
});


module.exports = Answers;
