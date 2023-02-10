const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Publisher extends Model {}

Publisher.init({

    name:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            isAlpha:true
        }
    },
    reader:{
        type:DataTypes.STRING,
        allowNull:true,
        references:{
            Model:'User',
            Key:'userName'
        }
    }
},{
    sequelize
})

module.exports = Publisher