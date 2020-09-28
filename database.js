const Sequelize = require('sequelize');
const { databaseOptions } = require('./config/config');

const db = new Sequelize(databaseOptions);

module.exports = { db, Sequelize }