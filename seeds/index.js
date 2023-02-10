const sequelize =require('../config/connection')
const{User,Post,Comment}= require('../models')

const seed = async()=>{
    await sequelize.sync({force:true});
    const users = await User.bulkCreate([
        {
            email:'yaycomics@yay.com',
            password:'bookies'
        },
        {
            email:'welove@comicbooks',
            password:'everybodyshouldreadcomicbooks'
        }
    ],{
        individualHooks:true
    })

    const post= await Post.bulkCreate([
        {
            post:'must read commic book',
            UserId:3

        },
        {
            post:'long live comic bookies',
            UserId:1
        }
    ],{
        individualHooks:true
    })

    const comment= await Comment.bulkCreate([
        {
            comment:'better than batman',
            UserId:3
        },
        {
            comment:'batmans nothing with out robbin',
            UserId:1
        }
    ])
    process.exit(1)
}

seed();