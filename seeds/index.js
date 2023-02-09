const sequelize =require('../config/connection')
const{User,Post,Comment}= require('../models')

const seed = async()=>{
    await sequelize.sync({force:true});
    const users = await User.bulkCreat([
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
            
        }
    ])
}