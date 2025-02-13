import React from 'react'
import DirectoryCard from './DirectoryCard'
import { FaSearch } from 'react-icons/fa'

const HomeMain2 = () => {
    return (
        <div className="w-full md:w-[80%] min-h-screen py-20 px-5 bg-white">

            <div className='py-3 flex flex-col md:flex-row justify-between items-center gap-4'>
                <h2 className='text-black text-3xl font-semibold'> Alumni Directory </h2>

                <div className="w-full md:w-auto">
                    <label className="input input-bordered bg-white rounded-3xl w-full md:w-80 border border-gray-400 flex items-center gap-2">
                        <FaSearch />
                        <input type="text" className="grow" placeholder="Search" />
                    </label>
                </div>

                <div className="w-full md:w-auto">
                    <select className="select select-bordered w-full border border-gray-400 bg-white">
                        <option enable selected>Department :</option>
                        <option> IT Depart </option>
                        <option> Science Depart </option>
                        <option> CS Depart </option>
                    </select>
                </div>
            </div>

            <div className='mt-5'>
                <DirectoryCard
                    name="Emma Johnson"
                    role="Project Manager"
                    company="Technova Solutions"
                    image="https://via.placeholder.com/100"
                />
            </div>
        </div>
    )
}

export default HomeMain2