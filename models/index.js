const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Publisher = require('./Publisher');
const Character = require('./Character');
const Series = require('./Series');
const Volume = require('./Volume');


User.hasMany(Post, {
    foreignKey: 'userName'
});

User.hasMany(Comment, {
    foreignKey: 'userName',
    onDelete: "cascade"
});

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
Publisher.hasMany(Character)

Publisher.hasMany(Volume)

Character.belongsTo(Publisher)

Volume.belongsTo(Publisher)

// Publisher.belongsToMany(User,{
//     through:'LikedPublishers',
//     as:'LikedBy'
// })
// User.belongsToMany(Publisher,{
//     through:'LikedPublishers',
//     as:'LikedBy'
// })
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
// Series.belongsToMany(User,{
//     through:'LikedShows',
//     as:'WatchedBy'
// })
// User.belongsToMany(Series,{
//     through:'LikedShows',
//     as:'WatchedBy'
// })
module.exports = { User, Post, Comment, Publisher, Character, Volume};
