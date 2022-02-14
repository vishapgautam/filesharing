const router=require('express').Router()



router.get('/',(req,res)=>{
    res.render('front')
})






module.exports=router