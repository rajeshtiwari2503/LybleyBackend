const express=require("express");
const router= express.Router();
const Plan=require("../models/plans");


router.post("/addPlan",async(req,res)=>{
    try{
       let body=req.body;
       let data=new Plan(body);
       let data1=await data1.save();
       res.json({status:true,msg:"Plan added"});
    }catch(err){
     res.status(400).send(err);
    }
});

router.get("/getPlans",async(req,res)=>{
    try{
       let data=await Plan.find({});
       res.send(data);
    }catch(err){
       res.status(400).send(err);
    }
})

module.exports=router;