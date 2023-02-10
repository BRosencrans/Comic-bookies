const sequelize =require('../config/connection')
const{User,Post,Comment}= require('../models')

const seed = async()=>{
    await sequelize.sync({force:true});
    const users = await User.bulkCreate([
        {
            email:'yaycomics@yay.com',
            password:'bookies',
            userName: 'HwrdtheDuck',
            user_id:1
        },
        {
            email:'welove@comicbooks',
            password:'everybodyshouldreadcomicbooks',
            userName: 'NotSuperman',
            user_id:2
        }
    ],{
        individualHooks:true
    })

    const post= await Post.bulkCreate([
        {title: "thoughts?",
            text:'the best place to read comics is in an ice palace',
            user_id:2,
            userName: 'NotSuperman'

        },
        {title: "best movie eveeer",
            text:"when's the new howard the duck movie coming out?",
            user_id:1,
            userName: 'HwrdtheDuck'
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