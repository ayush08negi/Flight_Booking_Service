'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NotificationTicket extends Model {
    static associate(models) {
      // define association here
    }
  }
  NotificationTicket.init({
    subject:{
      type:DataTypes.STRING,
      allowNull:false
    },
    content: {
      type: DataTypes.STRING,
      allowNull:false
    },
    recepientEmail:{
      type:DataTypes.STRING,
      allowNull:false
    },
    status: {
      type:DataTypes.ENUM,
      allowNull:false,
      values:['PENDING','SUCCESS','FAILED'],
      defaultValue:"PENDING"
    },
    notificationTime: {
      type:DataTypes.DATE,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'NotificationTicket',
  });
  return NotificationTicket;
};