const express = require('express');
const router = express.Router();
const {Character,User} = require('../models');

router.get('/', (req,res)=>{
    Character.findAll({

    }).then(allCharacters=>{
        res.json(allCharacters)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({msg:"aww shucks!"})
    })
})
router.get('/:id', (req,res)=>{
    Character.findByPk({}).then(findOne=>{
        res.json(findOne)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({msg:"aww shucks!"})
    })
})
module.exports = router;