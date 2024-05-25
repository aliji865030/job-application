const jobmodels=require("../models/job")

const createJobs= async (req,res)=>{
    const jobobj=req.body;
    const newJob=new jobmodels(jobobj);
    

    const newlySavedData=await newJob.save();
    console.log(req.body);
  res.json({
    success:true,
    message:"create job api",
    jobId:newlySavedData._id

  })
}

const listJob= async (req,res)=>{
    const {minSalary ,maxSalary}=req.query;
    // const jobList= await jobmodels.find({
    //     $and:[{ salary:{ $gte:minSalary } },
    //     {salary:{$lte:maxSalary}}]
    // }
    
    // );

    const jobList=await jobmodels.find();
    console.log(jobList);
    res.json({
        success:true,
        message:"list job api",
        results:jobList
    })
}

const editJob=async(req,res)=>{
    const jobId=req.params.id;
    console.log(jobId);
    console.log(req.body);
    await jobmodels.findByIdAndUpdate(jobId,req.body)

    // const findObj={
    //     title:"Dev ops Engineer"    // we can use any thing like age,location etc etc 
    // }
    // const updateObj={
    //     age:80
    // }

    // await jobmodels.findOneAndUpdate(findObj,updateObj)   // it will update only one item which will come first
    // await jobmodels.updateMany(findObj,updateObj)   // it will update all the item which will match the findObj


    res.json({
        success:true,
        message:"job updated successfully"
    })
}

const deleteJob = async (req,res)=>{

    const jobId= req.params.id;

    await jobmodels.findByIdAndDelete("664cc50b31c64424f0b9d4e1")

    // const findObj={
    //     title:"Dev ops Engineer"    // we can use any thing like age,location etc etc 
    // }

    // await jobmodels.findOneAndDelete(findObj)     same like update
    // await jobmodels.deleteMany(findObj)

    res.json({
        success:true,
        message:"data delete success"
    })
}

const jobController={
    createJobs,
    listJob,
    editJob,
    deleteJob
}

module.exports=jobController;