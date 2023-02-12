const sequelize =require('../config/connection')
const{User,Post,Comment,Character,Publisher,Series, Volume}= require('../models')
const rawCharacterData = require("./characters.json")
const rawPublishersData = require("./publishers.json")
const rawSeriesData = require('./series.json')
const rawVolumesData = require("./volumes.json")

const filteredVolumesData1 = rawVolumesData.filter((volumes) => {
    return volumes.first_issue != null && volumes.first_issue.name != null;
});
// const filteredVolumesData2 = filteredVolumesData1.filter((volumes)=>{
//     return volumes.first_issue.name != null;
// })
const filteredVolumesData2 = filteredVolumesData1.filter((volumes)=>{
    return volumes.last_issue != null && volumes.last_issue.name != null;
})
// const filteredVolumesData4 = filteredVolumesData3.filter((volumes)=>{
//     return volumes.last_issue.name != null;
// })

const trimmedVolumesData = filteredVolumesData2.map((volumes) => {
    return {name:volumes.name,
        publisher_name:volumes.publisher.name,
      first_issue_name:volumes.first_issue.name,
       last_issue_name:volumes.last_issue.name,
       last_issue_number:volumes.last_issue.issue_number,
        count_of_issues:volumes.count_of_issues
    }
});
const trimmedCharacterData = rawCharacterData.map((character) => {
    return {
        name: character.name,
        aliases: character.aliases,
        first_appearance_in_issue_number: character.first_appeared_in_issue && character.first_appeared_in_issue.issue_number,
        first_appearance_in_issue_name: character.first_appeared_in_issue && character.first_appeared_in_issue.name,
        count_of_issue_appearances: character.count_of_issue_appearances
    };
});
const filteredCharacterData1 = trimmedCharacterData.filter((character) => {
    return character.name != null;
});

const filteredCharacterData2 = filteredCharacterData1.filter((character) => {
    let flag = true;
    if (character.name && 
        ((character.name.length === 7 && character.name[3] === '-') || 
         (character.name.length === 6 && character.name[3] === '-') || 
         (character.name.length === 6 && character.name[2] === '-'))) {
        flag = false;
    }
    return flag;
});


const trimmedPublishersData = rawPublishersData.map((publisher) => {
    return {name:publisher.name,
        deck:publisher.deck,
         description:publisher.description,
       
    }
})
const filteredPublisherData = trimmedPublishersData.filter((publisher) => {
    return publisher.name != null;
});
const filteredSeriesData = rawSeriesData.filter((series)=>{
    return series.publisher != null;
})
const trimmedSeriesData =  filteredSeriesData.map((series)=>{
    return {
        name:series.name,
        aliases:series.aliases,
        count_of_episodes:series.count_of_episodes,
        first_episode_title:series.first_episode.name,
        last_episode_title:series.last_episode.name,
        production:series.publisher.name,
        // needs to be publisher.name, but is returning null
        // ask about this with a TA when possible, syntax may be wrong
        deck:series.deck,
        start_year:series.start_year
    }
})

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

    const publishers = await Publisher.bulkCreate(filteredPublisherData);
    const characters = await Character.bulkCreate(filteredCharacterData2);
    const series = await Series.bulkCreate(trimmedSeriesData);
    const volumes = await Volume.bulkCreate(trimmedVolumesData);
    process.exit(1)
}


// console.log (trimmedVolumesData)
// console.log( trimmedPublishersData)
// console.log(filteredCharacterData)

seed();






