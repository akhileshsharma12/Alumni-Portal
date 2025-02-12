import React from 'react';

const Jobs = ({ icon }) => {
    return (
        <div className="px-4 sm:px-8 md:px-16 mt-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-50 px-4 sm:px-6 py-4 border border-purple-600 rounded-md space-y-4 md:space-y-0">
                <div className="flex items-center w-full md:w-auto">
                    <div className="text-3xl md:text-4xl">{icon}</div>
                    <div className="ml-3">
                        <h2 className="text-lg sm:text-xl md:text-2xl text-black font-semibold">Software Engineer</h2>
                        <p className="text-sm sm:text-base">
                            <span className="text-purple-500 font-semibold">abc tech solutions</span> • Anywhere (Remote)
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-auto text-left md:text-right">
                    <h2 className="text-sm sm:text-lg md:text-xl text-black">31, Dec 2025</h2>
                    <p className="text-sm sm:text-base text-black">No of vacancies: 4</p>
                </div>

                <div className="w-full md:w-auto text-left md:text-right">
                    <button className="bg-gray-200 text-[#5c0f8b] px-4 sm:px-6 py-2 rounded-lg w-full md:w-auto">
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Jobs;
