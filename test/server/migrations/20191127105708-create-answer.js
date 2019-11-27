'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('answer', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      text: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.BOOLEAN
      },
      questionId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'question',
            schema: 'public'
          },
          key: 'id'
        },
        allowNull: false,
        onDelete:'cascade'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('answer');
  }
};
