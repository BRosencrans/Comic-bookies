const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model {}

Character.init({
    name:{
        type:DataTypes.STRING,
        allowNull:false,      
    },
    aliases:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    first_appearance_in_issue_number:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    first_appearance_in_issue_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    count_of_issue_appearances:{
        type:DataTypes.INTEGER,
        allowNull:false
    }

},{sequelize})
module.exports=Character