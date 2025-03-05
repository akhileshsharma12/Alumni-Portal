import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Jobs from './Jobs';
import API from '../api/backend.api.jsx';
import { useUser } from '../store/UserProvider.jsx';

const HomeMainManageJobs = () => {
    const { user, setUser } = useUser();
    const [myJobs, setMyJobs] = useState([]);
  
    


    useEffect(() => {
        const getAllJobs = async () => {
            try {
                const response = await API.get(`/job/user-jobs?id=${user.id}`,{ withCredentials: true });
                setMyJobs(response.data); // Update state with response data
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };
        getAllJobs();
    }, []);
   

    return (
        <div className="homeMain5  w-full md:w-[80%] min-h-screen py-22 lg:py-20  bg-white">
            <div className='ml-3'>
                <div className='flex gap-5 mt-1 ml-2 lg:mt-2'>
                    <Link to='/Alumni/jobBoard'>
                        <span className='bg-gray-200 text-black text-sm py-1 px-4 rounded-full cursor-pointer'> All Jobs </span>
                    </Link>
                    <Link to='/Alumni/jobBoard-postJob'>
                        <span className='bg-gray-200 text-black text-sm py-1 px-4 rounded-full cursor-pointer'> Post Jobs </span>
                    </Link>
                    <Link to='/Alumni/jobBoard-manageJobs'>
                        <span className='bg-gray-200 text-black text-sm py-1 px-4 rounded-full cursor-pointer'> Manage Jobs </span>
                    </Link>
                </div>
            </div>

            <div className='ml-4 text-3xl my-4'>
                <h2> Manage Jobs </h2>

                {myJobs.map((job) => (
                    <Jobs key={job.id} job={job} managePost={true} btnText = {job.verification_status} />
                ))}
                
            </div>
        </div>
    )
}

export default HomeMainManageJobs;