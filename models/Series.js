const {Model, DataTypes} = require('sequelize');
sequelize = require('../config/connection');

class Series extends Model {}

Series.init({
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    aliases:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    count_of_episodes:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
    first_episode_title:{
        type:DataTypes.STRING,
        allowNull:true,

    },
    last_episode_title:{
        type:DataTypes.STRING,
        allowNull:true
    // },
    // production:{
    //     type:DataTypes.STRING,
    //     allowNull:false,
    },
    deck:{
        type:DataTypes.TEXT,
        allowNull:true,

    },
    start_year:{
        type:DataTypes.STRING
    }
},{
    sequelize
})
module.exports=Series
