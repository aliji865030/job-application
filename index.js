const express=require("express");
const mongoose=require("mongoose");
const dotEnv=require("dotenv")

const jobRoutes=require("./routes/job")

const app=express();

dotEnv.config();

app.use(express.json())


// mongo connect

mongoose
.connect(process.env.DB_connection_URL)
.then(()=>console.log("database connectes success"))
.catch((error)=>console.log(error))

// Api routes

app.use(jobRoutes);

app.listen(10000,()=>console.log("app is up and runing on port no 10000"))

