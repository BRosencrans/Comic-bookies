const express = require('express');
const router = express.Router();
const {Volume, Publisher, Character} = require('../models');

router.get('/', (req, res)=>{
    Volume.findAll({}).then(allVolumes=>{
        res.json(allVolumes)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({msg:'aww shucks!'})
    })
})
router.get('/:id', (req,res)=>{
    Volume.findByPk({}).then(oneVolume=>{
        res.json(oneVolume)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({msg:'aww shucks!'})
    })
})

module.exports = router
