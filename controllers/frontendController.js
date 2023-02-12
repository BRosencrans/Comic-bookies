const express= require('express');
const { rmSync } = require('fs');
const router= express.Router();
const {User,Post, Comment,Character,Series,Publisher,Volume} = require('../models');

router.get("/",(req,res)=>{
    res.render("home"){
        isLoggedIn:req.session.logged
        userId:req.session.userId,rmSync
    }
})

// // login page
// router.get("/login",(req,res)=>{
//     if(req.session.loggedIn){
//         return res.redirect("/")
//     }
//     res.render("login",{
//         isLoggedIn:req.session.loggedIn,
//         userId:req.session.userId,
//     })
// })



module.exports= router;

