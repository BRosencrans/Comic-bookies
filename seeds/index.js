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
            UserId:3
        },
        {
            comment:'batmans nothing with out robin',
            UserId:1
        }
    ])
    const publisher = await Publisher.bulkCreate([
        {
            name:'DC Comics'
        },{
            name:"Marvel"
        },{
            name:"Dark Horse Comics"
        },{
            name:"Archie Comics"
        },{
            name:"Gold Key"
        },{
            name:"Heavy Metal"
        },{
            name:"Fiction house"
        },{
            name:"Quality Comics"
        },{
            name:'Fox Comics'
        },{
            name:"Ace Magazines"
        },{
            name:"Fawcett Publications"
        },{
            name:"Charlton"
        },{
            name:"Atlas Comics"
        },{
            name:"Image"
        },{
            name:'Max Comics'
        },{
            name:'Aircel Publishing'
        },{
            name:'Crossgen'
        },{
            name:'Eros Comix'
        },{
            name:"America's Best Comics"
        },{
            name:'Amerotica'
        },{
            name:'Avatar Press'
        },{
            name:'Tangent Comics'
        },{
            name:'Eurotica'
        },{
            name:'Wildstorm'
        },{
            name:'Verotik'
        },{
            name:'Milestone'
        }
    ])
    process.exit(1)
}

seed();