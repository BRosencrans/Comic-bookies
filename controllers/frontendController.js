const express= require('express');
const router= express.Router();
const {User, Post, Comment, Publisher} = require('../models');


router.get("/",(req,res)=>{
    Post.findAll({
        include:[User,Post,Comment,Publisher]
    }).then(postData=>{
        console.log(postData)
        const hbsPost = postData.map(post=>post.toJSON())
        console.log('==============================')
        console.log(hbsPost)
        res.render("home",{
            allPosts:hbsPosts
        })
    })
})
router.get("/login",(req,res)=>{
    res.render("login")
})
router.get("/signup",(req,res)=>{
    res.render("signup")
})
router.get("/profile",(req,res)=>{
    if(!req.session.userId){
        return res.redirect("/login")
    }
    User.findByPk(req.session.userId,{
        include:[Post,Comment,Publisher]
    }).then(userdata=>{
        console.log(userdata)
        const hbsData = userdata.toJSON();
        console.log('==============================')
        console.log(hbsData)
        res.render("profile",hbsData)
    })
    // res.redirect("/sessions")
})

module.exports = router;

















































// const express= require('express');
// const { rmSync } = require('fs');
// const router= express.Router();
// const {User,Post, Comment,Character,Series,Publisher,Volume} = require('../models');



// router.get("/",(req,res)=>{
//     res.render("home")
// })

// // // login page
// // router.get("/login",(req,res)=>{
// //     if(req.session.loggedIn){
// //         return res.redirect("/")
// //     }
// //     res.render("login",{
// //         isLoggedIn:req.session.loggedIn,
// //         userId:req.session.userId,
// //     })
// // })



// module.exports= router;

