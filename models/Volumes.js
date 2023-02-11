
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Volumes extends Model {}

Volumes.init({name:{
    type:DataTypes.STRING,
    allowNull:false,      
},
publisher_name:{type:DataTypes.STRING,
    allowNull:true//,references: {
       // model: 'Publisher',
       // key: 'name' }
},
first_issue_name:{
    type:DataTypes.STRING,
    allowNull:false,
},
last_issue_name:{
    type:DataTypes.STRING,
    allowNull:false,
},
last_issue_:{
    type:DataTypes.INTEGER,
    allowNull:false
},
count_of_issues:{
    type:DataTypes.INTEGER,
    allowNull:false
}

}, {sequelize,
freezeTableName: true,
})
module.exports=Volumes