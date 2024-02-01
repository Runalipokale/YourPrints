const Sequelize = require('sequelize');

// for database connection through sequelize
const sequelize = require('../utils/database');

const User = sequelize.define('user', {
     id:{
        type: Sequelize.INTEGER ,
        autoIncrement : true ,
        allowNull: false ,
        primaryKey: true
      },
      name:Sequelize.STRING,
      email:Sequelize.STRING,
      phoneNumber:{
      type:Sequelize.INTEGER,
      allowNull:false,
      },
      address:{
       type:Sequelize.STRING,
       allowNull:false,
      }
});

module.exports = User;
