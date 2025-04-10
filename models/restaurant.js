// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Restaurant extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Restaurant.init({
//     name: DataTypes.STRING,
//     address: DataTypes.STRING,
//     contact: DataTypes.BIGINT
//   }, {
//     sequelize,
//     modelName: 'Restaurant',
//   });
//   return Restaurant;
// };


import { Model, DataTypes } from 'sequelize';
import sequelize from './index';

class Restaurant extends Model {}

Restaurant.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contact: {
    type: DataTypes.BIGINT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Restaurant',
  timestamps: true,
  paranoid: true
});

export default Restaurant;