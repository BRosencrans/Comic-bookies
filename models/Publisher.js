const sequelize = require('../config/connection');
const {Model, DataTypes} = require('sequelize');

class Publisher extends Model {}

Publisher.init({

    name:{
        type: DataTypes.STRING,
        allowNull:true,    
    },
   deck:{
        type: DataTypes.TEXT,
        allowNull:true,
    },
    description:{
        type: DataTypes.TEXT,
        allowNull:true,
    }
},{
    sequelize,
})

module.exports = Publisher