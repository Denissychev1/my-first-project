const db = require('./db.config');
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;

const Imitations = sequelize.define('imitations', {
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
  questions: {
    type: Sequelize.STRING,
    allowNull: false
  },
  answers: {
    type: Sequelize.STRING,
    allowNull: false
  },

});
module.exports = Imitations;
