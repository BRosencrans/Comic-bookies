const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Post extends Model {}

Post.init({
  //sets up the post table
  userName:{
    type: DataTypes.STRING,
  references: {
    model: 'Users',
    key: 'userName'
  }},
  title: {
    type:  DataTypes.STRING,
    allowNull: false,
    // validate:{
      // len:[4]
  },
  text: {
    type:  DataTypes.STRING,
    allowNull: false,
    // validate:{
      // len:[4]
}},
   //add media share

   
    {
      sequelize,
    }
  );
  
  module.exports = Post;