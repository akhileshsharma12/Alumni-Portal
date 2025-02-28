import React, { useState } from 'react';
import { FiMoreVertical, FiEdit3, FiTrash2 } from "react-icons/fi";

const Jobs = ({ icon, textToShow, job, onDelete, manageMode }) => {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <div className="mt-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-50 px-5 sm:px-6 py-4 border border-purple-600 rounded-xl space-y-4 md:space-y-0">
                {/* Job Details */}
                <div className="flex items-center w-full md:w-auto">
                    <div className="text-3xl md:text-4xl">{icon}</div>
                    <div className="ml-3">
                        <h2 className="text-lg sm:text-xl md:text-2xl text-black font-semibold">{job.title}</h2>
                        <p className="text-sm sm:text-base">
                            <span className="text-purple-500 font-semibold">{job.company}</span> • {job.location}
                        </p>
                    </div>
                </div>

                {/* Date & Vacancies */}
                <div className="w-full md:w-auto text-left md:text-right">
                    <h2 className="text-sm sm:text-lg md:text-xl text-black">{job.date}</h2>
                    <p className="text-sm sm:text-base text-black">No of vacancies: {job.vacancies}</p>
                </div>

                {/* Status Button (Always visible) */}
                <div className="w-full md:w-auto text-left md:text-right">
                    <label htmlFor="my_modal_7" className="btn bg-purple-100 border border-purple-700 text-[#5c0f8b] px-3 sm:px-6 py-2 rounded-lg w-full md:w-auto">
                        {textToShow}
                    </label>
                </div>

                {/* Manage Mode: Edit/Delete Dropdown */}
                {manageMode && (
                    <div className="relative">
                        <button onClick={() => setShowOptions(!showOptions)} className="text-gray-600 ml-4">
                            <FiMoreVertical size={20} />
                        </button>

                        {showOptions && (
                            <div className="absolute right-0 mt-2 bg-white border rounded shadow-md w-24 z-10">
                                <button className="flex items-center w-full px-3 py-2 hover:bg-gray-100">
                                    <FiEdit3 className="mr-2" /> Edit
                                </button>
                                <button onClick={() => onDelete(job.id)} className="flex items-center w-full px-3 py-2 text-red-600 hover:bg-gray-100">
                                    <FiTrash2 className="mr-2" /> Delete
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Jobs;
