import React, { useState } from 'react';
import DirectoryCard from './DirectoryCard';
import { FaSearch } from 'react-icons/fa';
import avatar_img from '../assets/avatar.jpeg';

const HomeMain2 = () => {

    const [searchText, setSearchText] = useState('');

    const directoryData = [
        { name: "Aarav Sharma", role: "Software Engineer", company: "Infosys" },
        { name: "Priya Nair", role: "Data Scientist", company: "Tata Consultancy Services" },
        { name: "Rohit Verma", role: "Product Manager", company: "Flipkart" },
        { name: "Sneha Patil", role: "UX Designer", company: "Zomato" },
        { name: "Vikas Gupta", role: "Marketing Specialist", company: "Reliance Industries" },
        { name: "Ananya Singh", role: "HR Manager", company: "Wipro" },
        { name: "Arjun Kapoor", role: "Financial Analyst", company: "ICICI Bank" },
        { name: "Tanvi Deshmukh", role: "DevOps Engineer", company: "HCL Technologies" },
        { name: "Karan Mehta", role: "Sales Executive", company: "Mahindra & Mahindra" },
        { name: "Pooja Reddy", role: "Business Analyst", company: "Cognizant" }
    ];

    //console.log(directoryData);

    const foundDirectory = directoryData.filter((data) => {
        return data.name.toLowerCase().includes(searchText.toLowerCase());
    })

    return (
        <div className="w-full md:w-[80%] min-h-screen py-20 px-4 md:px-5 bg-white">

            <div className="flex flex-col sm:flex-row items-center justify-between w-full border-b pb-2">

                <h1 className="text-3xl font-semibold text-black">Alumni Directory</h1>

                <div className="flex items-center space-x-3 mt-3 sm:mt-0">
                    {/* Search Bar */}
                    <div className="relative">
                        <FaSearch className="absolute left-3 top-3 text-gray-500" />
                        <input
                            type="text"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            placeholder="Search by name "
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

            <div className='mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 text-center'>
                {/* Here mapping the component with json data */}

                {
                    foundDirectory.length === 0 ? (
                        <h1 className="text-md text-center">No data found <span className='font-semibold'> {searchText} </span> </h1>
                    ) : (
                        foundDirectory.map((data, index) => (
                            <DirectoryCard
                                key={index}
                                name={data.name}
                                role={data.role}
                                company={data.company}
                                image={avatar_img}
                            />
                        ))
                    )

                }

            </div>
        </div>
    )
}

export default HomeMain2;