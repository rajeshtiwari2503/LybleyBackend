const express=require("express");
const app=express();
require("./src/db/connection");

app.use(express.json());

const port=5000;
app.listen(port,()=>{
    console.log(`Listing on port ${port}`);
});
