'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DemoMerchants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DemoMerchants.init({
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.TEXT,
    join_date: DataTypes.DATE,
    phone_number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DemoMerchants',
  });
  return DemoMerchants;
};