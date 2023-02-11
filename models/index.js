const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Publisher = require('./Publisher');
const Character = require('./Character');
User.hasMany(Post, {
    foreignKey: 'userName'
});

User.hasMany(Comment, {
    foreignKey: 'userName',
    onDelete: "cascade"
});

// User.hasMany(Publisher, {
//     foreignKey: 'userName',
//     through:"reading",
//     as:'reader'
// });

Post.belongsTo(User, {
    foreignKey: 'userName',
    onDelete: "cascade"
});

Comment.belongsTo(User, {
    foreignKey: 'userName',
    onDelete: "cascade"
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: "cascade"
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: "cascade"
})
module.exports = { User, Post, Comment, Publisher, Character};
