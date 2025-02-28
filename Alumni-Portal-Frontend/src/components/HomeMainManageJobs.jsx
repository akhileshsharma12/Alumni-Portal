import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Jobs from './Jobs';

const HomeMainManageJobs = () => {

    const [jobs, setJobs] = useState([
        { id: 1, jobTitle: "Software Engineer", company: "ABC Company", location: "Remote", vacancies: 4, status: "Pending", date: "31 Dec, 2024" },
    ]);

    const handleDeleteJob = (id) => {
        setJobs(jobs.filter(job => job.id !== id));
    };

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

                {jobs.map(job => (
                    <Jobs key={job.id} job={job} textToShow={"Pending"} onDelete={handleDeleteJob} manageMode />
                ))}
                
            </div>
        </div>
    )
}

export default HomeMainManageJobs;