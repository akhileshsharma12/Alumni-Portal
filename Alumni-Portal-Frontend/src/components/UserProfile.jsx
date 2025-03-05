// <div className='border-b p-5'>
//     <h1 className="text-3xl font-semibold text-black"> Your Profile </h1>
// </div>

import React, { useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaBirthdayCake, FaUser } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { useUser } from "../store/UserProvider";

const Profile = () => {

    const { user } = useUser();

    const [profileImage, setProfileImage] = useState(
        `https://ui-avatars.com/api/?name=${user.name}&background=fff1f1&color=080e4d`
    );

    const handleImageUpload = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfileImage(reader.result);
            }
            reader.readAsDataURL(file);
        }
    }

    return (
        <div className="container mx-auto p-6">
            {/* Profile Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 p-6 rounded-lg text-center shadow-sm">
                    <div className="relative w-24 h-24 mx-auto border-2 border-purple-500 rounded-full flex items-center justify-center">
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="w-20 h-20 rounded-full"
                        />
                        <input
                            type="file"
                            accept="image/*"
                            id="profileImageInput"
                            className="hidden"
                            onChange={handleImageUpload}
                        />
                        <label
                            htmlFor="profileImageInput"
                            className="absolute bottom-0 right-0 bg-white p-1 rounded-full border border-gray-300 cursor-pointer"
                        >
                            📷
                        </label>
                    </div>
                    <h2 className="mt-3 text-lg font-semibold">
                        {user.name} <FiEdit3 className="inline text-gray-500 ml-1 cursor-pointer" />
                    </h2>
                    <p className="text-gray-500">Alumni, Class of 2024</p>
                    <p className="text-gray-500">Bachelor of Computer Applications, BCA</p>
                    <p className="text-blue-600 font-semibold flex items-center justify-center">
                        Authenticated <span className="ml-1">✔️</span>
                    </p>
                </div>


                {/* Basic Information */}
                <div className="bg-white border-2 p-6 rounded-lg shadow-sm relative">
                    <h2 className="text-lg font-semibold">Basic Information</h2>
                    <FiEdit3 className="absolute top-4 right-4 text-red-500 cursor-pointer" />
                    <div className="mt-3 space-y-2 text-gray-700">
                        <p className="flex items-center"><FaEnvelope className="mr-2 text-gray-500" /> <a href="mailto:sheldoncoope@gmail.com" className="text-blue-600">sheldoncoope@gmail.com</a></p>
                        <p className="flex items-center"><FaPhone className="mr-2 text-gray-500" /> +91-9012345678</p>
                        <p className="flex items-center"><BsLinkedin className="mr-2 text-gray-500" /> <a href="https://www.linkedin.com/in/techbooster-23" className="text-blue-600">LinkedIn Profile</a></p>
                        <p className="flex items-center"><FaMapMarkerAlt className="mr-2 text-gray-500" /> Trimurti Nagar, Amravati, Maharashtra</p>
                        <p className="flex items-center"><FaBirthdayCake className="mr-2 text-gray-500" /> May 15, 2001</p>
                        <p className="flex items-center"><FaUser className="mr-2 text-gray-500" /> Unmarried</p>
                    </div>
                </div>
            </div>

            {/* Educational Information & Current Working Profile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white border-2 p-6 rounded-lg shadow-sm relative">
                    <h2 className="text-lg font-semibold">REA related experience</h2>
                    <FiEdit3 className="absolute top-4 right-4 text-red-500 cursor-pointer" />
                    <p className="mt-3 text-gray-700">GH Raisoni University Amravati</p>
                    <p className="text-gray-500">Bachelor of Computer Applications, BCA</p>
                    <p className="text-gray-500">2022-2024</p>
                </div>

                <div className="bg-white border-2 p-6 rounded-lg shadow-sm relative">
                    <h2 className="text-lg font-semibold">Current Working Profile</h2>
                    <FiEdit3 className="absolute top-4 right-4 text-red-500 cursor-pointer" />
                    <p className="mt-3 text-purple-700 font-semibold">Software Engineer</p>
                    <p className="text-gray-700">Infotech Solutions Pvt Ltd</p>
                    <p className="text-gray-500">Software Development</p>
                    <p className="text-gray-500">Since 2025</p>
                </div>

                {/* Profile Summary */}
                <div className="bg-white border-2 p-6 rounded-lg shadow-sm mt-6 relative">
                    <h2 className="text-lg font-semibold">Profile Summary</h2>
                    <FiEdit3 className="absolute top-4 right-4 text-red-500 cursor-pointer" />
                    <p className="mt-3 text-gray-700">Add a short summary about yourself.</p>
                </div>

                <div className="bg-white border-2 p-6 rounded-lg shadow-sm mt-6 relative">
                    <h2 className="text-lg font-semibold"> Education </h2>
                    <span className="absolute top-4 right-4 text-red-500 cursor-pointer flex row gap-1 items-center ">
                        <span>
                            Add Education
                        </span>
                    </span>
                    <p className="mt-3 text-gray-700">Add a short summary about yourself.</p>
                </div>

                <div className="bg-white border-2 p-6 rounded-lg shadow-sm relative">
                    <h2 className="text-lg font-semibold"> Experience </h2>
                    <FiEdit3 className="absolute top-4 right-4 text-red-500 cursor-pointer" />
                    <p className="text-gray-700"> Software Developer at XYZ Company. </p>
                    <p className="text-gray-500"> Developed and maintained web applications using React and Node.js. </p>
                    <p className="text-gray-500"> Collaborated with cross-functional teams to deliver high-quality software products. </p>
                    <p className="text-gray-500"> Led a project to optimize application performance, improving load times by 30%. </p>
                </div>

            </div>

        </div >
    );
};

export default Profile;
