const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Post extends Model {}

Post.init({
  //sets up the post table
  username: DataTypes.STRING,
  references: {
    model: 'User',
    key: 'username'
  },
  title: {
    type: VARCHAR,
    allowNull: false},
  text: {
    type: VARCHAR,
    allowNull: false},
    },
    //add media share
    {
      sequelize,
    }
  );
  
  module.exports = Post;