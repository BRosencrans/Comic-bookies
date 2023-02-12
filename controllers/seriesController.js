const express = require('express');
const router = express.Router();
const {Series, Publisher, Character} = require('../models');

router.get('/', (req,res)=>{
    Series.findAll().then(allSeries=>{
        res.json(allSeries)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({msg:'aww shucks!'})
    })
})

router.get('/:id', (req,res)=>{
    Series.findByPk({}).then(findOne=>{
        res.json(findOne)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({msg:'aww shucks!'})
    })
})

module.exports = router;