const db = require('./db.config');
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;

const completion = sequelize.define("completion", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  Result: {
    type: Sequelize.CHAR,
    allowNull: false
  }
});


module.exports = completion;
