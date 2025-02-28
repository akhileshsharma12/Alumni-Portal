import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { getAllJobs, postJob, jobRequests, approveJob, rejectJob, userJobs, deleteJob} from "../controller/job.controller.js";

const router = Router();

router.get("/all-jobs",authMiddleware,getAllJobs);

router.post("/post-job", authMiddleware,postJob);

router.get("/job-requests",authMiddleware,jobRequests);

router.patch("/approve-job",authMiddleware,approveJob);

router.patch("/reject-job",authMiddleware,rejectJob);

router.get("/user-jobs",authMiddleware,userJobs);

router.delete("/delete-job",authMiddleware,deleteJob);

export default router;