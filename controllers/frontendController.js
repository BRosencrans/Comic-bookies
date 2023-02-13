const express= require('express');
const router= express.Router();
const {User, Post, Comment, Publisher, Volume} = require('../models');


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
router.get("/publisher",(req,res)=>{
    res.render("publisher")
})


router.get('/character', (req,res)=>{
    res.render('character')
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
        res.render('publisher', {publisherData})
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

