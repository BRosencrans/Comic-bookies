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
    Character.findByPk(req.params.id,{
    }).then(oneChar=>{
        res.json(oneChar)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"aww shucks!", err})
    })
})
router.get('/:id', (req,res)=>{
    Character.create({
        name:req.params.name,
        aliases:req.params.aliases,
        first_appearence_in_issue_number:req.params.first_appearence_in_issue_number,
        first_appearence_in_issue_name:req.params.first_appearence_in_issue_name,
        count_of_issue_appearences:req.params.count_of_issue_appearences
    }).then(newChar=>{
        res.json(newChar)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({msg:'aww shucks!', err})
    })
})
module.exports = router;