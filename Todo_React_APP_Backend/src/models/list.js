'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  List.init({
    Title: {
    type :DataTypes.STRING,
    allowNull: false
    },
    Todo_Description: {
      type :DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'List',
  });
  return List;
};