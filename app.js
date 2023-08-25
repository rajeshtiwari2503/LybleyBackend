const express=require("express");
const app=express();
require("./src/db/connection");
const cors=require("cors");
const registration=require("./src/routers/registration");
const plan=require("./src/routers/plan");

app.use(express.json());
app.use(cors());

app.use(registration);
app.use(plan);

const port=5000;
app.listen(port,()=>{
    console.log(`Listing on port ${port}`);
});
