const sequelize =require('../config/connection')
const{User,Post,Comment, Publisher}= require('../models')

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
            post_id: 1,
            userName: 'HwrdtheDuck'
        },
        {
            comment:'batmans nothing with out robbin',
            post_id:2,
            userName: 'NotSuperman'

        }
    ])
    process.exit(1)
}

seed();