import { Sequelize, Options } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const env = process.env.NODE_ENV || 'development';
const config = require('../config/database')[env];


/*
const options:Options = {
    username:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    // port:process.env.DB_PORT as unknown as number,
    port: Number(process.env.DB_PORT),
    dialect:"postgres",
    host:process.env.DB_HOST,
    sync:{alter:true,logging:true},  // this change in the time of prodcuction
    logging:true
}
    */

// const sequelize = new Sequelize(options)

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    logging: config.logging,
    dialectOptions: config.dialectOptions, // Pass dialectOptions from config
    ssl: config.ssl
  }
);

export default sequelize