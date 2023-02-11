const express =  require('express');
const router = express.Router();
const {User,Post,Comment,Publisher} = require('../models');

router.get('/', (req,res)=>{
    Publisher.findAll().then(bookData=>{
        res.json(bookData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"aww shucks!", err})
    })
})
router.get('/:id', (req,res)=>{
    Publisher.findByPk(req.params.id,{
    }).then(bookData=>{
        res.json(bookData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"aww shucks!", err})
    })
})

module.exports = router