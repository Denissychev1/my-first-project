const db = require('./db.config');
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;
const Questions =require('./questions');
const patients = require("./patients");
const completion = require('./completion');

module.exports = {up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('imitations', {
      id: { type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false},
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('imitations');
  }
};
