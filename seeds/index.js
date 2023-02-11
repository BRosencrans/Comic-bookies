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

   
    process.exit(1)
}
const rawCharacterData = require("./characters.json")

const trimmedCharacterData = rawCharacterData.map((character) => {
    return {name:character.name,
        aliases:character.aliases,
        first_appeared_in_issue_number:character.first_appeared_in_issue.issue_number,
        first_appeared_in_issue_name:character.first_appeared_in_issue.name,
        count_of_issue_appearances:character.count_of_issue_appearances
    }
})
const filteredCharacterData = trimmedCharacterData.filter((character)=>{
    let flag = true
    if(character.name.length === 7 && character.name[3]=== '-' || character.name.length === 6 && character.name[3] === '-' || character.name.length === 6 && character.name[2] === '-'){
        flag = false
    }
    return flag
})

const rawPublishersData = require("./publishers.json")

const trimmedPublishersData = rawPublishersData.map((publisher) => {
    return {name:publisher.name,
        deck:publisher.deck,
        description:publisher.description,
       
    }
})

console.log( trimmedPublishersData)
console.log(filteredCharacterData)

// seed();






