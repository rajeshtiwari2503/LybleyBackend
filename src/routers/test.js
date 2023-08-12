const express=require("express");
const router= express.Router();



router.post("/login",async(req,res)=>{
    try{
      let body=req.body;
      let user= await Registration.findOne({email:body.email,password:body.password});
      if(user){
        res.send({status:true,msg:"Logged in",user:user});
      }else{
      res.status(404).send({status:false,msg:"Incorrect Username and Password!"});
      }
    }catch(err){
      res.status(400).send(err);
    }
});

module.exports=router;