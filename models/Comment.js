const {Model, DataTypes}= require('sequelize');
const sequelize= require('../config/connection');

class Comment extends Model{}

Comment.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    post_id:{
        type: DataTypes.INTEGER,
        key:true,
        references:{
            model:'Posts',
            key: 'id'
        }
    },
    username:{
        type:DataTypes.STRING,
        references: {
            model: 'Users',
            key: 'username'
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
