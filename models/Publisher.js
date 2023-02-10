const {Model, Datatypes} = require('sequelize');
const sequelize = require('../config/connection');

class Publisher extends Model {}

Publisher.init({

    brand:{
        type:Datatypes.STRING,
        allowNull:false,
        validate:{
            isAlpha:true
        }
    },
    reader:{
        type:Datatypes.STRING,
        refernces:{
            Model:'User',
            Key:'userName'
        }
    }
},{
    sequelize
})

module.exports = Publisher