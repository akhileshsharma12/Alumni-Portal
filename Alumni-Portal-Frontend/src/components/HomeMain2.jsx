import React from 'react';
import DirectoryCard from './DirectoryCard';
import { FaSearch } from 'react-icons/fa';
import avatar_img from '../assets/avatar.jpeg';

const HomeMain2 = () => {
    return (
        <div className="w-full md:w-[80%] min-h-screen py-25 px-5 bg-white">

            <div className="flex flex-col sm:flex-row items-center justify-between w-full border-b pb-2">

                <h1 className="text-3xl font-semibold text-black">Alumni Directory</h1>

                <div className="flex items-center space-x-3 mt-3 sm:mt-0">
                    {/* Search Bar */}
                    <div className="relative">
                        <FaSearch className="absolute left-3 top-3 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search by name or department"
                            className="pl-10 pr-4 py-2 border border-gray-400 rounded-full text-gray-700 focus:ring-2 focus:ring-purple-300 outline-none w-full sm:w-64"
                        />
                    </div>

                    <select
                        className="border border-gray-400 px-4 py-2 rounded-md text-gray-700 focus:ring-2 focus:ring-purple-300 outline-none"
                    >
                        <option value="All">Department: All</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Business">Business</option>
                        <option value="Engineering">Engineering</option>
                    </select>
                </div>
            </div>

            <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9'>
                <DirectoryCard
                    name="Emma Johnson"
                    role="Project Manager"
                    company="Technova Solutions"
                    image={avatar_img}
                />
                <DirectoryCard
                    name="Emma Johnson"
                    role="Project Manager"
                    company="Technova Solutions"
                    image={avatar_img}
                />
                <DirectoryCard
                    name="Emma Johnson"
                    role="Project Manager"
                    company="Technova Solutions"
                    image={avatar_img}
                />
                <DirectoryCard
                    name="Emma Johnson"
                    role="Project Manager"
                    company="Technova Solutions"
                    image={avatar_img}
                />
                <DirectoryCard
                    name="Emma Johnson"
                    role="Project Manager"
                    company="Technova Solutions"
                    image={avatar_img}
                />
                <DirectoryCard
                    name="Emma Johnson"
                    role="Project Manager"
                    company="Technova Solutions"
                    image={avatar_img}
                />
                <DirectoryCard
                    name="Emma Johnson"
                    role="Project Manager"
                    company="Technova Solutions"
                    image={avatar_img}
                />
                <DirectoryCard
                    name="Emma Johnson"
                    role="Project Manager"
                    company="Technova Solutions"
                    image={avatar_img}
                />
                <DirectoryCard
                    name="Emma Johnson"
                    role="Project Manager"
                    company="Technova Solutions"
                    image={avatar_img}
                />
            </div>
        </div>
    )
}

export default HomeMain2;