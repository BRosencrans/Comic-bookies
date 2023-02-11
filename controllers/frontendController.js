const express= require('express');
const router= express.Router();
const {User, Post, Comment, Publisher} = require('./models');

// route to homepage
router.get("/",(req,res)=>{
    res.render("home",{
        isLogggedIn:req.session.loggedIn,
        userId:req.session.userId,
    })
})

// route to login
router.get("/login",(req,res)=>{
    if(req.session.loggedIn){
        return res.redirect("/")
    }
    res.render("login",{
        isLoggedIn:req.session.loggedIn,
        userId:req.session.userId,
    })
})

// route to signup
router.get("/")