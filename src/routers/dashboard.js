const express=require("express");
const router= express.Router();
const Plan = require("../models/plans");
const Registration=require("../models/registration");
const Servicer=require("../models/servicerRegistratin");
const SubscribedPlan=require("../models/subscribedPlan");

router.get("/dashboardDetail",async(req,res)=>{
     try{
        let plans= await Plan.countDocuments().exec();
        let users= await Registration.countDocuments().exec();
        let servicer= await Servicer.countDocuments().exec();
        let subscribedPlan= await SubscribedPlan.countDocuments().exec();
        res.json({plans:plans,users:users,servicer:servicer,subscribedPlan:subscribedPlan});
     }catch(err){
        res.status(400).send(err);
     }
});

module.exports=router;