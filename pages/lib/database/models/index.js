import { Sequelize, DataTypes } from 'sequelize';
import mysql2 from 'mysql2';
import patientRegistrationModel from './patientregistration.js';

import envConfigs from '../config/config';

const env = process.env.NODE_ENV || 'development';
const config = envConfigs[env];
const db = {};

let sequelize;
if (config.url) {
  sequelize = new Sequelize(config.url, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    dialectModule: mysql2
  });
}

db.PatientRegistration = patientRegistrationModel(sequelize, DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
