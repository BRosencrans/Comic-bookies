const express= require('express');
const router= express.Router();
const {User, Post, Comment, Publisher, Character} = require('../models');


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

router.get('/volume', (req, res)=>{
    res.render('volume')
})

router.get('/series', (req, res)=>{
    res.render('series')
})

router.get('characters',(req,res)=>
res.render('characters'))

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
        limit: 5
    }).then(characterData=>{
        console.log(characterData)
        const hbsCharData = characterData.map(character=>character.toJSON())
        res.render('characters', {
            allCharacters:hbsCharData
        })

    })
    
})

router.get('/volume',(req,res)=>{
    Volume.findAll({
        limit:10
    }).then(volumeData=>{
        console.log(volumeData)
        const hbsVolume= volumeData.map(volume=>volume.toJSON())
        console.log(hbsVolume)
        res.render('volume', {
            allVolume:hbsVolume
        })
    })
})
module.exports= router;

