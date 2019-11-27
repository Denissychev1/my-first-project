'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('completions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      score: {
        type: Sequelize.INTEGER
      },
      imitationId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'imitation',
            schema: 'public'
          },
          key: 'id'
        },
        allowNull:false,
      },
      patientId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'patient',
            schema: 'public'
          },
          key: 'id'
        },
        allowNull:false,
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
    return queryInterface.dropTable('completions');
  }
};
