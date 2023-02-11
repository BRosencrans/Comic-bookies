const express = require('express');
const router = express.Router();
const {User, Post, Comment} = require('../models');
const bcrypt = require('bcrypt');

router.get('/', (req, res)=>{
    User.findAll({
        attributes:{exclude: ['password']}
        }).then(userData=>{
        res.json(userData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:'aww shucks!', err})
    })
})
router.get('/:id', (req,res)=>{
    User.findByPk(req.params.id,{
        include:[Post]
    }).then(userData=>{
        res.json(userData)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({msg:"aww shucks!", err})
    })
})
router.post('/', (req,res)=>{
    console.log(req.body);
    User.create({
        email:req.body.email,
        password:req.body.password,
        userName:req.body.userName
    }).then(userData=>{
        req.session.userId = userData.id;
        req.session.userEmail = userData.email;
        res.json(userData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:'aww shucks!', err})
    })
})
router.post('/login', (req,res)=>{
    User.findOne({
        where:{
            email:req.body.email
        }
    }).then(userData=>{
        if (!userData){
            return res.status(403).json({msg:'incorrect login credentials'})
        } else {
            if(bcrypt.compareSync(req.body.password, userData.password)){
                req.session.userId = userData.id;
                req.session.userEmail = userData.email;
                return res.json(userData)
            } else {
                return res.status(403).json({msg:'incorrect login credentials'})
            }
        }
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:'aww shucks!', err})
        })
    })

    module.exports = router;