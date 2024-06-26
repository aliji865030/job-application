const mongoose=require("mongoose")

const jobSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:false,
        default:0,
        unique:true    // for preventing duplication
    }

})

const jobmodels=mongoose.model("jobs",jobSchema)

module.exports=jobmodels;