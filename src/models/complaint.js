const mongoose=require("mongoose");

const complaintSchema=new mongoose.Schema({
      userId:{type:String},
      applianceName:{type:String},
      partName:{type:String},
      description:{type:String},
      image:{type:String}
},{timestamps:true});

const complaintModel=new mongoose.model("complaint",complaintSchema);

module.exports=complaintModel;