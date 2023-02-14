const express = require('express');
const router = express.Router();
const {User, Post, Comment} = require('../../models');
const bcrypt = require('bcrypt');

router.get('/', (req,res)=>{
    Comment.findAll({
        include:[
        {model: Post,
            as:"Post",
        attributes: ['id','userName','title','text']
        }]
        }).then(commentData=>{
        res.json(commentData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"aww shucks!", err})
    })
})
router.get('/:id', (req,res)=>{
    Comment.findByPk(req.params.id,{
        include:[User, Post]
    }).then(commentData=>{
        res.json(commentData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"aww shucks!", err})
    })
})

router.post('/', (req,res)=>{
    if(!req.session.userId){
        return res.status(403).json({msg:'login first you dingus'})
    }
    console.log(req.body);
    Comment.create({
        comment:req.body.comment,
        userId:req.body.userId
    }).then(commentData=>{
        res.json(commentData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"aww shucks", err})
    })
      
})
router.delete('/:id', (req,res)=>{
    if(!req.session.userId){
        return res.status(403).json({msg:"login first you dingus!"})
    }
    console.log(req.body);
    Comment.findByPk(req.params.id).then(commentData=>{
        if(!commentData){
            return res.status(404).json({msg:"no such comment"})
        }else if(postData.userId!==req.session.userId){
            return res.status(403).json({msg:"not your post, what are you doing?"})
        }
    Comment.destroy({
        where:{
            id:req.params.id,
        }
    }).then(commentData=>{
        res.json(commentData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:'aww shucks!',err})
    })
        })
})
module.exports = router;


