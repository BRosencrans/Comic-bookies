const {Model, DataTypes}= require('sequelize');
const sequelize= require('../config/connection');

class Comment extends Model{}

Comment.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    postId:{
        type: DataTypes.INTEGER,
        key:true,
        references:{
            model:'Post',
        }
    },
    userName:{
        type:DataTypes.STRING,
        references: {
            model: 'User',
            key: 'userName'
    }
    },
    comment:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[10,100]
        }
    },
},{
        sequelize
    }

  
);

module.exports = Comment;
