const express=require("express");

const router=express.Router();

const jobController=require("../controller/job")

router.post("/api/jobs",jobController.createJobs);

router.get("/api/jobs",jobController.listJob);

router.put("/api/jobs/:id",jobController.editJob);

router.delete("/api/jobs/:id",jobController.deleteJob)

module.exports=router;