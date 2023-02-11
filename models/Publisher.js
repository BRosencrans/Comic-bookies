const sequelize = require('../config/connection');
const {Model, DataTypes} = require('sequelize');

class Publisher extends Model {}

Publisher.init({

    name:{
        type: DataTypes.STRING,
        allowNull:false,    
    },
   deck:{
        type: DataTypes.STRING,
        allowNull:true,
    },
    description:{
        type: DataTypes.STRING,
        allowNull:true,
    }
},{
    sequelize,
})

module.exports = Publisher