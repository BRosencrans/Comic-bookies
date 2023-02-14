const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Publisher = require('./Publisher');
const Character = require('./Character');
const Series = require('./Series');
const Volume = require('./Volume');


User.hasMany(Post, {
    as:'Post',
    foreignKey: 'username'
});

User.hasMany(Comment, {
    as: "Comment",
    foreignKey: 'username',
    onDelete: "cascade"
});

Post.belongsTo(User, {
    as: 'User',
    foreignKey: 'username',
    onDelete: "cascade"
});

Comment.belongsTo(User, {
    as: 'User',
    foreignKey: 'username',
    onDelete: "cascade"
});

Comment.belongsTo(Post, {
    as: 'Post',
    foreignKey: 'post_id',
    onDelete: "cascade"
});

Post.hasMany(Comment, {
    as: 'Comment',
    foreignKey: 'post_id',
    onDelete: "cascade"
})
Publisher.hasMany(Character, {
    as: "Character",
    foreignKey: 'hero'
})

Publisher.hasMany(Volume, {
    as:'Volume',
    foreignKey: 'comic'
})

Character.belongsTo(Publisher, {
    as:'Publisher',
    foreignKey:"hero"
})

Volume.belongsTo(Publisher, {
    as: 'Publisher',
    foreignKey: 'comic'
})

Publisher.belongsToMany(User,{
    as: 'User',
    through:'LikedPublishers',
    as:'LikedBy'
})
User.belongsToMany(Publisher,{
    as: 'Publisher',
    through:'LikedPublishers',
    as:'LikedBy'
})
Volume.belongsToMany(User, {
    through:'LikedVolumes',
    as: 'ReadBy'
})
User.belongsToMany(Volume,{
    through:'LikedVolumes',
    as:'ReadBy'
})
Character.belongsToMany(User,{
    through:'FavChars',
    as:'MyFavs'
})
User.belongsToMany(Character,{
    through:'FavChars',
    as:'MyFavs'
})
Series.belongsToMany(User,{
    
    through:'LikedShows',
    as:'WatchedBy'
})
User.belongsToMany(Series,{
    through:'LikedShows',
    as:'WatchedBy'
})
module.exports = { User, Post, Comment, Publisher, Character,Series, Volume};
