const express= require('express');
const router= express.Router();
const bcrypt = require('bcrypt')
const {User, Post, Comment, Publisher, Character,Series,Volume} = require('../models');

router.get("/",(req,res)=>{
    Post.findAll({
        include:[
        {
            model: Comment,
            as: "Comment",
            attributes: ['id', 'post_id', 'userName', 'comment'],
           
        }
    ]
    }).then(postData=>{
        console.log(postData)
        const hbsPost = postData.map(post=>post.toJSON())
        res.render("home",{
            isLoggedIn:req.session.loggedIn,
            userId:req.session.userId,
            allPosts:hbsPost
        })
    })
})

router.get('/login', (req, res)=>{
    res.render('login')
})
router.get('/signup', (req,res)=>{
    res.render('signup')
})
router.post("/signup", async (req,res)=>{
    const {username, password, email} = req.body;
    if (!username || !password || !email) {
        return res.status(400).json({error: 'Username, Email and Password are required'});
    }
    try{
        const newUser = await User.create({
            username,
            password,
            email
        });
        req.session.loggedIn = true;
        req.session.userId = newUser.id;
        return res.redirect('/');
    } catch(error){
        return res.status(500).json({ error: 'Error while creating user'})
    }
})

router.get("/logout",(req,res)=>{
    if(req.session.loggedOut){
        return res.redirect('/')
    }
    res.render("logout",{
        isLoggedOut:req.session.loggedOut,
        userId:req.session.userId,
    }
    )
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
        res.render("profile",hbsData)
    })
    // res.redirect("/sessions")
})

router.get('/publisher', (req,res)=>{
    Publisher.findAll({
        limit: 50
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
        limit: 50
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
        limit: 50
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
        limit: 50
    }).then(volumeData=>{
        console.log(volumeData)
        const hbsVolumeData = volumeData.map(volume=>volume.toJSON())
        res.render('volumes', {
            allVolumes:hbsVolumeData
        })
    })
    
})
router.get('/post/:id', (req, res) => {
        Post.findByPk(req.params.id,{
            include: [
            {model: Comment,
                as: 'Comment',
            attributes: ['id','userName','comment'],
            }]
            })
        .then(onePostData=>{
            console.log(onePostData)
            const onePost= onePostData.get()
            res.render('post', {onePost
            })
        })
});
module.exports= router;

