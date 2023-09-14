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

router.post("/login", async (req, res) => {
   try {
     let body = req.body;
     let user = await servicerRegistration.findOne({ businessPhone: body.contact });
     if (user) {
       let otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });
       await servicerRegistration.findByIdAndUpdate({ _id: user._id }, { otp: otp });
       smsSend(otp, body.contact);
       res.json({ status: true, msg: "OTP Sent" });
     } else {
       res.status(404).send({ status: false, msg: "Incorrect Mobile Number" });
     }
   } catch (err) {
     res.status(400).send(err);
   }
 });

 router.post("/loginMobile", async (req, res) => {
   try {
     let body = req.body;
     let user = await servicerRegistration.findOne({ businessPhone: body.contact });
     if (user) {
       let otp = otpGenerator.generate(4, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });
       await servicerRegistration.findByIdAndUpdate({ _id: user._id }, { otp: otp });
       smsSend(otp, body.contact);
       res.json({ status: true, msg: "OTP Sent" });
     } else {
       res.status(404).send({ status: false, msg: "Incorrect Mobile Number" });
     }
   } catch (err) {
     res.status(400).send(err);
   }
 });
 
 router.post("/otpPhoneVerification", async (req, res) => {
   try {
     let body = req.body;
     let user = await servicerRegistration.findOne({ otp: body.otp });
     if (user) {
       res.json({ status: true, user: user, msg: "Logged in successful" });
     } else {
       res.status(404).send({ status: false, msg: "Incorrect OTP" });
     }
   } catch (err) {
     res.status(500).send(err);
   }
 });

router.get("/getAllservicer",async(req,res)=>{
    try{
       let data=await servicerRegistration.find({});
       res.send(data);
    }catch(err){
       res.status(400).send(err);
    }
});

router.get("/getServicerBy/:id",async(req,res)=>{
    try{
       let _id=req.params.id;
       let data=await servicerRegistration.findById(_id);
       res.send(data);
    }catch(err){
       res.status(400).send(err);
    }
});

router.delete("/deleteServicerBy/:id",async(req,res)=>{
    try{
       let _id=req.params.id;
       let data=await servicerRegistration.findByIdAndDelete(_id);
       res.json({status:true,msg:"Deleted"});
    }catch(err){
       res.status(500).send(err);
    }
});

router.patch("/updateServicerBy/:id",async(req,res)=>{
    try{
       let _id=req.params.id;
       let body=req.body;
       let data=await servicerRegistration.findByIdAndUpdate(_id,body);
       res.json({status:true,msg:"Updated"});
    }catch(err){
       res.status(500).send(err);
    }
});

module.exports=router;