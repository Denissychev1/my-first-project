const db = require('./db.config');
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;


module.exports = {up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('questions', {
      id: { type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false},
      imitationId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'imitations',
            schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false
      },
      question: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('questions');
  }
};

