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
router.get('/:name', (req,res)=>{
    Character.findOne(req.params.name,{
    }).then(oneChar=>{
        res.json(oneChar)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"aww shucks!", err})
    })
})
router.get('/:id', (req,res)=>{
    Character.findByPk(req.params.id,{
    }).then(oneChar=>{
        res.json(oneChar)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"aww shucks!", err})
    })
})



module.exports = router;