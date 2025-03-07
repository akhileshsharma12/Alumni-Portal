import React from 'react';
import { Link } from 'react-router-dom';

const IntroJobs = () => {

    const gradientTextStyle = {
        background: 'linear-gradient(144deg, #5c0f8b 40%, #ff5100 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };

    const dummy = [
        {
            title: 'Software Engineer',
            company: 'ABC Tech Solutions',
            location: 'Anywhere (Remote)',
            deadline: '31 Dec, 2024',
            vacancies: 4,
        },
        {
            title: 'Frontend Developer',
            company: 'XYZ Innovations',
            location: 'New York, NY',
            deadline: '15 Jan, 2025',
            vacancies: 2,
        },
        {
            title: 'Backend Developer',
            company: '123 Web Services',
            location: 'San Francisco, CA',
            deadline: '28 Feb, 2025',
            vacancies: 3,
        },
    ];

    return (
        <div className="p-4 bg-purple-100 ">
            {/* <h2 style={gradientTextStyle} className="text-xl font-semibold text-purple-700 mb-4 text-center">
                Open Job Positions
            </h2> */}
            <div className="space-y-8">
                {dummy.map((job, index) => (
                    <div

                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border rounded-xl bg-white shadow-sm border-purple-300"
                    >
                        <div className="flex flex-col mb-4 sm:mb-0">
                            <h3 className="text-lg sm:text-xl md:text-2xl text-black font-semibold"> {job.title} </h3>
                            <p className="text-purple-500 font-semibold"> {job.company} </p>
                            <p className="text-sm text-gray-400"> {job.location} </p>
                        </div>

                        <div className="text-left sm:text-right mb-4 sm:mb-0">
                            <p className="text-sm sm:text-lg md:text-xl text-black"> {job.deadline} </p>
                            <p className="text-sm sm:text-base text-black">No of vacancies: {job.vacancies} </p>
                        </div>
                        <div>
                            <Link to='/login'>
                                <button className="bg-purple-100  text-purple-500 border border-purple-500 px-4 py-2 rounded-md">
                                    Apply Now
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IntroJobs;