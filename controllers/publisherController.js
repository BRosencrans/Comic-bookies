const express =  require('express');
const router = express.Router();
const {Publisher} = require('../models');

router.get('/', async (req,res)=>{
    try{
        const publisher= await Publisher.findAll();
        
        const publishers= []
        for(let i=0; i < publishers.length; i++){
            const pubObj= publishers[i];
            const pubCounts= {
                pubObj.toJSON(),
                
            }
        }
    }
})

// router.get('/', (req,res)=>{
//     Publisher.findAll().then(bookData=>{
//         res.json(bookData)
//     }).catch(err=>{
//         console.log(err);
//         res.status(500).json({msg:"aww shucks!", err})
//     })
// })
// router.get('/:id', (req,res)=>{
//     Publisher.findByPk(req.params.id,{
//     }).then(bookData=>{
//         res.json(bookData)
//     }).catch(err=>{
//         console.log(err);
//         res.status(500).json({msg:"aww shucks!", err})
//     })
// })

module.exports = router