const db = require('./db.config');
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;
const Answers =require('./answers');

const Questions = sequelize.define("questions", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  question: {
    type: Sequelize.TEXT,
    allowNull: false
  },
});
Questions.hasMany(Answers, {onDelete:"cascade"});

module.exports = Questions;
