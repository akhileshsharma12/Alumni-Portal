import React from 'react';
import { Link } from 'react-router-dom';
import PostJob from './PostJob';

const HomeMainPostJob = () => {
    return (
        <div className="homeMain5  w-full md:w-[80%] min-h-screen py-22 lg:py-20  bg-white">
            <div className='ml-3'>
                <div className='flex gap-5 mt-1 ml-2 lg:mt-2'>
                    <Link to='/Alumni/jobBoard'>
                        <span className='bg-gray-200 text-black text-sm py-1 px-4 rounded-full cursor-pointer'> All Jobs </span>
                    </Link>
                    <Link to='/Alumni/jobBoard-postJob '>
                        <span className='bg-gray-200 text-black text-sm py-1 px-4 rounded-full cursor-pointer'> Post Jobs </span>
                    </Link>
                    <Link to='/Alumni/jobBoard-manageJobs'>
                        <span className='bg-gray-200 text-black text-sm py-1 px-4 rounded-full cursor-pointer'> Manage Jobs </span>
                    </Link>
                </div>


                <div className='ml-2'>
                    <h1 className='text-3xl mt-3'> Post a Job </h1>
                    <PostJob />
                </div>
            </div>


        </div>
    )
}

export default HomeMainPostJob;