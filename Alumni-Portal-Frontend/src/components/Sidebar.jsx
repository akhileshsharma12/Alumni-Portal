// import React, { useState, useEffect } from "react";
// import {
//     FaBars,
//     FaTimes,
//     FaUserFriends,
//     FaBriefcase,
//     FaCalendarAlt,
//     FaImages,
//     FaUsers,
//     FaDonate
// } from "react-icons/fa";
// import HomeMain from "../components/HomeMain";

// const Sidebar = () => {
//     const [isOpen, setIsOpen] = useState(window.innerWidth >= 1024);
//     const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth < 1024);
//             setIsOpen(window.innerWidth >= 1024);
//         };

//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     const toggleSidebar = () => {
//         if (isMobile) {
//             setIsOpen(!isOpen);
//         }
//     };

//     return (
//         <div className="flex ml-60">
//             {/* Mobile Toggle Button */}
//             {isMobile && (
//                 <button
//                     className="fixed top-20 left-4 bg-purple-700 text-white p-2 rounded-md z-50"
//                     onClick={toggleSidebar}
//                     aria-label="Toggle Sidebar"
//                 >
//                     {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//                 </button>
//             )}

//             {/* Sidebar */}
//             <div className={`bg-gray-900 text-white h-screen px-5 py-4 transition-all duration-300 fixed top-16 left-0 z-40 ${isOpen ? "w-64" : "w-16"}`}>
//                 <nav className="space-y-4 mt-6">
//                     <button className="flex items-center space-x-4 px-3 py-2 rounded-lg hover:bg-gray-700 w-full text-left">
//                         <FaUserFriends size={20} />
//                         <span className={`${isOpen ? "block" : "hidden"} transition-all duration-300`}>Alumni Directory</span>
//                     </button>

//                     <button className="flex items-center space-x-4 px-3 py-2 rounded-lg hover:bg-gray-700 w-full text-left">
//                         <FaCalendarAlt size={20} />
//                         <span className={`${isOpen ? "block" : "hidden"} transition-all duration-300`}>Events</span>
//                     </button>

//                     <button className="flex items-center space-x-4 px-3 py-2 rounded-lg hover:bg-gray-700 w-full text-left">
//                         <FaBriefcase size={20} />
//                         <span className={`${isOpen ? "block" : "hidden"} transition-all duration-300`}>Jobs Board</span>
//                     </button>

//                     <button className="flex items-center space-x-4 px-3 py-2 rounded-lg hover:bg-gray-700 w-full text-left">
//                         <FaImages size={20} />
//                         <span className={`${isOpen ? "block" : "hidden"} transition-all duration-300`}>Memories</span>
//                     </button>

//                     <button className="flex items-center space-x-4 px-3 py-2 rounded-lg hover:bg-gray-700 w-full text-left">
//                         <FaUsers size={20} />
//                         <span className={`${isOpen ? "block" : "hidden"} transition-all duration-300`}>Community</span>
//                     </button>

//                     <button className="flex items-center space-x-4 px-3 py-2 rounded-lg hover:bg-gray-700 w-full text-left">
//                         <FaDonate size={20} />
//                         <span className={`${isOpen ? "block" : "hidden"} transition-all duration-300`}>Donation</span>
//                     </button>
//                 </nav>
//             </div>

//             {/* Main Content */}
//             <div className={`w-full p-5 transition-all duration-300 ${isOpen ? "ml-6" : "ml-16"}`}>
//                 <HomeMain />
//             </div>

//             {isMobile && isOpen && (
//                 <div
//                     className="fixed inset-0 bg-black bg-opacity-50 z-30"
//                     onClick={toggleSidebar}
//                 ></div>
//             )}
//         </div>
//     );
// };

// export default Sidebar;


import React from "react";
import { 
    FaUserFriends, FaBriefcase, FaCalendarAlt, FaImages, FaUsers, FaDonate 
} from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className="bg-gray-900 text-white h-screen w-[20%] fixed top-16 left-0 p-5">
            {/* <h2 className="text-xl font-bold text-white mb-4 ">G H Raisoni University</h2> */}
            <nav className="space-y-4 ">
                <button className="flex items-center space-x-4 px-3 py-2 rounded-lg hover:bg-gray-700 w-full">
                    <FaUserFriends size={20} />
                    <span>Alumni Directory</span>
                </button>
                <button className="flex items-center space-x-4 px-3 py-2 rounded-lg hover:bg-gray-700 w-full">
                    <FaCalendarAlt size={20} />
                    <span>Events</span>
                </button>
                <button className="flex items-center space-x-4 px-3 py-2 rounded-lg hover:bg-gray-700 w-full">
                    <FaBriefcase size={20} />
                    <span>Jobs Board</span>
                </button>
                <button className="flex items-center space-x-4 px-3 py-2 rounded-lg hover:bg-gray-700 w-full">
                    <FaImages size={20} />
                    <span>Memories</span>
                </button>
                <button className="flex items-center space-x-4 px-3 py-2 rounded-lg hover:bg-gray-700 w-full">
                    <FaUsers size={20} />
                    <span>Community</span>
                </button>
                <button className="flex items-center space-x-4 px-3 py-2 rounded-lg hover:bg-gray-700 w-full">
                    <FaDonate size={20} />
                    <span>Donation</span>
                </button>
            </nav>
        </div>
    );
};

export default Sidebar;
