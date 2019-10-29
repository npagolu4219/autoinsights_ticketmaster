const express = require('express');
const router = express.Router();

const field = require('../../models/appSchema');

router.get('/',(req,res)=>{
    field.find().sort({date:-1}).then(fields => res.json(fields));
})

router.post('/',(req,res)=>{
    const newField = new field({
        reportHeader:req.body.reportHeader,
        reportType:req.body.reportType,
        reportFor:req.body.reportFor


    });
    newField.save().then(field => res.json(field))
});

router.delete('/:id',(req,res)=>{
    field.findById(req.params.id).then(field => field.remove.then(()=>res.json({success : true}))).catch(err => res.status(404).json({success:false}))
});


module.exports =  router;