const Sequelize = require('sequelize');
const sequelize = new Sequelize('Patients', 'postgres', '12345', {
  dialect: 'postgres',
  host: 'localhost',
  port: '5432',
  define: {
    timestamps: false
  }
});
const db = {};
db.customers = require('../bd/connection');
module.exports = {Sequelize, sequelize,db};


