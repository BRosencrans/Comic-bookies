const express =  require('express');
const router = express.Router();
const {Publisher} = require('../../models');

router.get('/', (req,res)=>{
    Publisher.findAll().then(allPublishers=>{
        res.json(allPublishers)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({msg:'aww shucks!'})
    })
})

router.get('/:id', (req,res)=>{
    Publisher.findByPk({}).then(onePublisher=>{
        res.json(onePublisher)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({msg:'aww shucks!'})
    })
})

module.exports = router;
