const express= require('express');
const { rmSync } = require('fs');
const router= express.Router();
const {User, Post, Comment, Publisher} = require('../models');


router.get("/",(req,res)=>{
    res.render("home"){
        isLoggedIn:req.session.logged
        userId:req.session.userId,rmSync
    }
})


module.exports = router;

















































