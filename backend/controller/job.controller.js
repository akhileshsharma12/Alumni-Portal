import db from "../config/db.config.js"
import { getRole } from "../utils/getRole.js";
// for user  & admin : get all jobs
export const getAllJobs = async (req, res) => {
    try {
        const response = await db.query("SELECT job_id, title, company, location, vacancies, posted_date, type, overview, apply_link FROM jobs WHERE verification_status = $1 ORDER BY created_at DESC ", ["approved"]);
        res.status(200).json(response.rows);
    } catch (error) {
        console.log("Error : ", error);
        res.status(500).json({ message: 'internal server error' });
    }
}

// for user & admin : post a job
export const postJob = async (req, res) => {
    const post = req.body
    try {
        db.query("INSERT INTO jobs (user_id, title, company, location, vacancies, type, overview, apply_link) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)", [post.user_id, post.title, post.company, post.location, post.vacancies, post.type, post.overview, post.apply_link]);
        res.status(201).json({ message: "Job posted SuccessFully" });
    } catch (error) {
        console.log("Error : ", error);
        res.status(500).json({ message: 'internal server error' });
    }
}


// for admin : return all job requests
export const jobRequests = async (req, res) => {
    const user_id = req.query.id;
    try {

         const role = await getRole(user_id);

        if (role !== "admin") {
            return res.status(401).json({ message: "You are not authorized to access this route" });
        }else{
            const response = await db.query("SELECT job_id, title, company, location, vacancies, posted_date, type, overview, apply_link FROM jobs WHERE verification_status = $1",["pending"]);
            res.status(200).json(response.rows);
        }

    } catch (error) {
        console.log("Error : ", error);
        res.status(500).json({ message: 'internal server error' });
    }
}

// for admin : approve a job
export const approveJob = async (req, res) => {
    const job_id = req.query.job_id;
    
    try {
        const role = await getRole(req.query.user_id);
        if (role !== "admin") {
            
            return res.status(401).json({ message: "You are not authorized to access this route" });
        }else{
             db.query("UPDATE jobs SET verification_status = $1 WHERE job_id = $2", ["approved", job_id]);
        res.status(200).json({ message: "Job approved Successfully" });
        }
       
    } catch (error) {
        console.log("Error : ", error);
        res.status(500).json({ message: 'internal server error' });
    }
}

// for admin : reject a job
export const rejectJob = async (req, res) => {
    const job_id = req.query.job_id;
    try {
        const role = await getRole(req.query.user_id);
        if (role !== "admin") {
            return res.status(401).json({ message: "You are not authorized to access this route" });
        }else{
            db.query("UPDATE jobs SET verification_status = $1 WHERE job_id = $2", ["rejected", job_id]);
        res.status(200).json({ message: "Job rejected Successfully" });
        }
    } catch (error) {
        console.log("Error : ", error);
        res.status(500).json({ message: 'internal server error' });
    }
}

// for user : get all jobs posted by user
export const userJobs = async (req, res) => {
    const user_id = req.query.id;
    console.log(user_id);
    
    
    try {
        const response = await db.query("SELECT title, company, location, vacancies, posted_date, type, overview, apply_link, verification_status FROM jobs WHERE user_id = $1", [user_id]);
        res.status(200).json(response.rows);
    } catch (error) {
        console.log("Error : ", error);
        res.status(500).json({ message: 'internal server error' });
    }
}

//for user & admin : delete a job
export const deleteJob = async (req, res) => {
    const job_id = req.query.job_id;
    try {
        db.query("DELETE FROM jobs WHERE job_id = $1", [job_id]);
        res.status(200).json({ message: "Job deleted Successfully" });
    } catch (error) {
        console.log("Error : ", error);
        res.status(500).json({ message: 'internal server error' });
    }
}