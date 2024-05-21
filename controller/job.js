const createJobs= async (req,res)=>{
  res.json({
    success:true,
    message:"Dummy create job api"
  })
}

const listJob= async (req,res)=>{
    res.json({
        success:true,
        message:"Dummy list job api"
    })
}

const editJob=async(req,res)=>{
    res.json({
        success:true,
        message:"Dummy update job api"
    })
}

const deleteJob = async (req,res)=>{
    res.json({
        success:true,
        message:"Dummy delete job api"
    })
}

const jobController={
    createJobs,
    listJob,
    editJob,
    deleteJob
}

module.exports=jobController;