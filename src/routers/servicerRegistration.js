const express=require("express");
const router= express.Router();
const servicerRegistration=require("../models/servicerRegistratin");

router.post("/servicerRegistration",async(req,res)=>{
     try{
        let body=req.body;
        let data=new servicerRegistration(body);
        let data1=await data.save();
        res.json({status:true,msg:"Registration successful"});
     }catch(err){
        res.status(400).send(err);
     }
});

module.exports=router;