import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMoreVertical, FiEdit3, FiTrash2 } from "react-icons/fi";
import { FaPenToSquare } from "react-icons/fa6";
//import jobDetailsToApply from '../Job Details Component/JobDetails.jsx';

const Jobs = ({ icon, textToShow }) => {


    return (
        <div className=" mt-4 ">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-50 px-5 sm:px-6 py-4 border border-purple-600 rounded-xl space-y-4 md:space-y-0 ">
                <div className="flex items-center w-full md:w-auto">
                    <div className="text-3xl md:text-4xl">{icon}</div>
                    <div className="ml-3">
                        <h2 className="text-lg sm:text-xl md:text-2xl text-black font-semibold">Software Engineer</h2>
                        <p className="text-sm sm:text-base">
                            <span className="text-purple-500 font-semibold">abc tech solutions</span> • Anywhere (Remote)
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-auto text-left md:text-right ">
                    <h2 className="text-sm sm:text-lg md:text-xl text-black">31, Dec 2025</h2>
                    <p className="text-sm sm:text-base text-black">No of vacancies: 4</p>
                </div>

                <div className="w-full md:w-auto text-left md:text-right">
                    <div className='flex items-center gap-8'>
                        <label htmlFor="my_modal_7" className="btn bg-purple-100 border border-purple-700 text-[#5c0f8b] px-3 sm:px-6 py-2 rounded-lg w-full md:w-auto"> {textToShow} </label>

                        <div className="dropdown dropdown-end ">
                            <div tabIndex={0} role="button" className=" m-1">
                                <FaPenToSquare size={32} />
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li>
                                <label htmlFor="my_modal_7" className=""> View Post  </label>
                                </li>
                                <li><a> Edit </a></li>
                                <li className='text-red-500 font-semibold'><a> Delete </a></li>
                            </ul>
                        </div>
                    </div>


                    <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                    <div className="modal" role="dialog">
                        <div className="modal-box w-11/12 max-w-3xl p-6 sm:p-8">

                            <div>
                                <div className="flex flex-col sm:flex-row justify-between gap-4">
                                    <div className="text-start">
                                        <h2 className="text-2xl font-semibold">Software Engineer</h2>
                                        <small className="text-purple-600">ABC Company</small>
                                        <p>Amravati, Maharashtra, India</p>
                                    </div>
                                    <div>
                                        <button className="mt-3 sm:mt-4 px-4 sm:px-5 py-2 border-2 border-purple-400 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors text-sm sm:text-base flex items-center">
                                            Apply
                                            <i class="fa-solid fa-up-right-from-square ml-2"></i>
                                        </button>
                                    </div>
                                </div>

                                <div className="text-start grid grid-cols-1 sm:grid-cols-3 gap-y-2 sm:gap-x-3 mt-4 text-gray-500 text-sm sm:text-base text-center sm:text-left">
                                    <span>
                                        Type: <span className="text-black font-semibold">Remote</span>
                                    </span>
                                    <span>
                                        Vacancies: <span className="text-black font-semibold">04</span>
                                    </span>
                                    <span>
                                        Posted Date: <span className="text-black font-semibold">04, February 2025</span>
                                    </span>
                                </div>

                                <div className="text-start mt-4">
                                    <h2 className="font-semibold text-purple-700 text-2xl">Overview</h2>
                                    <p className="mt-2 text-sm sm:text-base">
                                        From ExaBytes to ZettaBytes, Azure Storage leads the industry in Advanced offloads and accelerations, powering high-performance Cloud scale Storage and Networking.
                                    </p>
                                    <p className="mt-4 text-sm sm:text-base">
                                        As a Software Engineer II in the Storage Infrastructure team, you will design and develop solutions to onboard new hardware accelerators, processors, transports, and cluster-level performance improvements.
                                    </p>
                                    <p className="mt-4 text-sm sm:text-base">
                                        Your work will encompass the entire software development lifecycle, including operation, scaling, training, and support.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <label className="modal-backdrop" htmlFor="my_modal_7">
                            Close
                        </label>
                    </div>

                </div>



            </div>


        </div>
    );
};

export default Jobs;
