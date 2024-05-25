const express=require("express");
const mongoose=require("mongoose");

const jobRoutes=require("./routes/job")

const app=express();

app.use(express.json())

// mongo connect

mongoose
.connect("mongodb+srv://abbasalichand786:uRHjgPSSxFcQHLUQ@jobapp.00kjbti.mongodb.net/")
.then(()=>console.log("database connectes success"))
.catch((error)=>console.log(error))

// Api routes

app.use(jobRoutes);

app.listen(10000,()=>console.log("app is up and runing on port no 10000"))

