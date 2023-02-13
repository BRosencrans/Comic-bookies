const express= require('express');
const router= express.Router();
const {User, Post, Comment, Publisher, Character,Series,Volume} = require('../models');


router.get("/",(req,res)=>{
    Post.findAll({
        include:{
            model:User,
            as: 'User'
        }
    }).then(postData=>{
        console.log(postData)
        const hbsPost = postData.map(post=>post.toJSON())
        console.log('==============================')
        console.log(hbsPost)
        res.render("home",{
            isLoggedIn:req.session.loggedIn,
            userId:req.session.userId,
            allPosts:hbsPost
        })
    })
})
router.post('/', (req, res)=>{
    if(!req.session.userId){
        return res.status(403).json({msg:'log in first!'})
    }
    console.log(req.body)
    Post.create({
        psot:req.body.post,
        userId:req.session.userId
    }).then(postData=>{
        res.json(postData)
    }).catch(err);
    res.status(500).json({msg:'aww shucks!', err})
})

router.get("/login",(req,res)=>{
    if(req.session.loggedIn){
        return res.redirect('/')
    }
    res.render("login",{
        isLoggedIn:req.session.loggedIn,
        userId:req.session.userId,
    }
    )
})
router.get("/signup",(req,res)=>{
    res.render("signup")
})
router.get("/profile",(req,res)=>{
    if(!req.session.userId){
        return res.redirect("/login")
    }
    User.findByPk(req.session.userId,{
        include:[Post,Comment]
    }).then(userdata=>{
        console.log(userdata)
        const hbsData = userdata.toJSON();
        console.log('==============================')
        console.log(hbsData)
        res.render("profile",hbsData)
    })
    // res.redirect("/sessions")
})

router.get('/publisher', (req,res)=>{
    Publisher.findAll({
        limit: 10
    }).then(publisherData=>{
        console.log(publisherData)
        const hbsPubData = publisherData.map(publisher=>publisher.toJSON())
        res.render('publisher', {
            allPublishers:hbsPubData
        })

    })
    
})
router.get('/characters', (req,res)=>{
    Character.findAll({
        limit: 10
    }).then(characterData=>{
        console.log(characterData)
        const hbsCharData = characterData.map(character=>character.toJSON())
        res.render('characters', {
            allCharacters:hbsCharData
        })

    })
    
})

router.get('/series', (req,res)=>{
    Series.findAll({
        limit: 10
    }).then(seriesData=>{
        console.log(seriesData)
        const hbsSeriesData = seriesData.map(series=>series.toJSON())
        res.render('series', {
            allSeries:hbsSeriesData
        })
    })
    
})
router.get('/volumes', (req,res)=>{
    Volume.findAll({
        limit: 10
    }).then(volumeData=>{
        console.log(volumeData)
        const hbsVolumeData = volumeData.map(volume=>volume.toJSON())
        res.render('volumes', {
            allVolumes:hbsVolumeData
        })
    })
    
})





module.exports= router;

