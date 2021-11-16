const router=require('express').Router()
const File=require('./../models/file')
require('dotenv').config()

router.get('/:uuid',async(req,res)=>{
    try{
    const file=await File.findOne({uuid:req.params.uuid})
    if(!file){
        return res.render('download',{error:'link expired'})
    }
    return res.render('download',{
        uuid:file.uuid,
        fileName:file.fileName,
        fileSize:file.size,
        downloadLink:`${process.env.APP_BASE_URL}/files/download/${file.uuid}`
    })
    }catch(err){
        return res.render('download',{error:'something went wrong',error:err})
    }
})





module.exports=router