const sequelize = require('../config/connection');
const {Model, DataTypes} = require('sequelize');

class Publisher extends Model {}

Publisher.init({

    name:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            isAlpha:true
        }
    },
    reader:{
        type: DataTypes.STRING,
        allowNull:true,
        refernces:{
            Model:'User',
            Key:'userName'
        }
    }
},{
    sequelize,
})

module.exports = Publisher