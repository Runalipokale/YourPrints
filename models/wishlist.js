const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Wishlist = sequelize.define('wishlist',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
})

module.exports=Wishlist;