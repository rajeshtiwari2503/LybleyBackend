const express=require("express");
const router= express.Router();
const Complaint=require("../models/complaint");

router.post("/createComplaint",async(req,res)=>{
   try{
      let body=req.body;
      let data=new Complaint(body);
      await data.save();
      res.json({status:true,msg:"Created"});
   }catch(err){
      res.status(400).send(err);
   }
});

router.get("/getAllComplaint",async(req,res)=>{
    try{
     let data=await Complaint.find({});
     res.send(data);
    }catch(err){
     res.status(400).send(err);
    }
});

router.get("/getComplaintBy/:id",async(req,res)=>{
    try{
     let _id=req.params.id;
     let data=await Complaint.findById(_id);
     res.send(data);
    }catch(err){
     res.status(400).send(err);
    }
});

router.get("/getComplaintByUser/:id",async(req,res)=>{
    try{
     let id=req.params.id;
     let data=await Complaint.find({userId:id});
     res.send(data);
    }catch(err){
     res.status(400).send(err);
    }
});

module.exports=router;