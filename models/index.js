// Use this index file to make all the instances only assosiate with their respective model file
// this will be isolate the instance db to just only access their respective tables
// make sure that you dont have any cross db join query in the api services  


'use strict'

import { Sequelize } from 'sequelize';
import configData from '~/config/config.js';

// list of model files based of each DB
import mainDB from './main_db';
import secondDB from './second_db';

const config = configData.main;
const dbList = configData.others;

const db = {}
let dbInstances = {}

// create new sequelize instance of every other DB
Object.keys(dbList).forEach(dbName => {
  const newInstanceDB = new Sequelize(
    dbList[dbName].database,
    dbList[dbName].username,
    dbList[dbName].password,
    dbList[dbName].config
  )
  dbInstances[dbName] = newInstanceDB
})

// Create Sequelize instances for main
const sequelizeMain = new Sequelize(
  config.database,
  config.username,
  config.password,
  config.config
)

const loadModels = async (sequelize, database) => {
  Object.keys(database).forEach((tableName) => {
    const model = database[tableName];
    db[tableName] = model(sequelize, Sequelize.DataTypes);;
  });

  return db;
};


// Load models for the main and other database
loadModels(sequelizeMain, mainDB);
loadModels(dbInstances['secondDB'], secondDB);

// // Associate models for main and v2 databases
Object.keys(db).forEach(modelName => {
  if (db[modelName]?.associate) {
    db[modelName].associate(db);
  }
});

// Set Sequelize instances to the db object
db.main = sequelizeMain
db.Sequelize = Sequelize
db.instances = dbInstances

export default db;