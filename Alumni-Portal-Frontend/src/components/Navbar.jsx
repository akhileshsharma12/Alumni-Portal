import React, { useState, useEffect } from "react";
import main_logo from "../assets/ghrua-white.png";
import { FaBars, FaBell, FaHome, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useUser } from "../store/UserProvider";
import API from "../api/backend.api";
import { ToastContainer } from "react-toastify";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1024);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const { user, setUser } = useUser();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
            if (!isMobile) {
                setSidebarOpen(true);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isMobile]);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const sidebarScrollStyle = {
        scrollbarWidth: "none",

    }

    useEffect(() => {
        const fetchData = async () => {
            const user = await API.get('/api/user/get-user', { withCredentials: true });
            await setUser({
                id: user.data.user.id,
                name: user.data.user.fullname,
                role: user.data.user.role,
                verified: user.data.user.verified
            });
        }
        fetchData();
    }, []);

    return (
        <div>
            <div className="bg-purple-800 px-6 py-3 flex justify-between items-center w-full fixed top-0 left-0 z-50">
                {/* Hamburger Menu (Visible on Mobile) */}
                <div className="text-white flex items-center pr-4 lg:hidden">
                    <button onClick={toggleSidebar}>
                        <FaBars size={25} />
                    </button>
                </div>

                {/* Left: Logo */}
                <div className="flex items-center">
                    <img className="h-8 sm:h-10 lg:h-[2.80rem]" src={main_logo} alt="GHRU Logo" />
                </div>

                {/* Right: Icons + Profile */}
                <div className="flex items-center gap-x-6 ml-auto">
                    {/* Home & Bell Icons (Hidden on Mobile) */}
                    <div className="hidden md:flex items-center gap-x-6 text-white">
                        <Link to="/alumni/home">
                            <FaHome size={29} className="cursor-pointer" />
                        </Link>
                        {/* <FaBell size={27} className="cursor-pointer" /> */}
                    </div>

                    {/* Mobile Menu Toggle */}

                    <button className="text-white" onClick={() => setNotificationOpen(!notificationOpen)}>
                        <FaBell size={25} />
                    </button>

                    {notificationOpen && (
                        <div className="absolute right-5 top-17 mt-2 w-90 sm:w-2/5 max-w-md border-2 border-purple-800 bg-white text-black shadow-lg rounded-lg overflow-hidden">
                            <div className="px-4 py-2 font-semibold border-b border-purple-800">
                                Notifications
                            </div>
                            <ul style={sidebarScrollStyle} className="max-h-56 px-2 py-2 overflow-y-auto overflow-x-hidden scrollbar-hide">
                                {/* Make that code in Component */}
                                <li className="px-4 py-1 mb-1 bg-purple-100 hover:bg-gray-200 border border-purple-700 rounded">
                                    You have a job enquiry
                                </li>
                                <li className="px-4 py-1 mb-1 bg-gray-100 hover:bg-purple-200 border border-purple-700 rounded">
                                    You have a job enquiry
                                </li>
                                <li className="px-4 py-1 mb-1 bg-purple-100 hover:bg-gray-200 border border-purple-700 rounded">
                                    You have a job enquiry
                                </li>
                                <li className="px-4 py-1 mb-1 bg-gray-100 hover:bg-purple-200 border border-purple-700 rounded">
                                    You have a job enquiry
                                </li>
                                <li className="px-4 py-1 mb-1 bg-purple-100 hover:bg-gray-200 border border-purple-700 rounded">
                                    You have a job enquiry
                                </li>
                                <li className="px-4 py-1 mb-1 bg-gray-100 hover:bg-purple-200 border border-purple-700 rounded">
                                    You have a job enquiry
                                </li>
                                <li className="px-4 py-1 mb-1 bg-purple-100 hover:bg-gray-200 border border-purple-700 rounded">
                                    You have a job enquiry
                                </li>
                                <li className="px-4 py-1 mb-1 bg-gray-100 hover:bg-purple-200 border border-purple-700 rounded">
                                    You have a job enquiry
                                </li>
                                <li className="px-4 py-1 mb-1 bg-purple-100 hover:bg-gray-200 border border-purple-700 rounded">
                                    You have a job enquiry
                                </li>
                                <li className="px-4 py-1 mb-1 bg-gray-100 hover:bg-purple-200 border border-purple-700 rounded">
                                    You have a job enquiry
                                </li>

                            </ul>
                        </div>
                    )}


                    {/* <button className=" text-white" onClick={() => setNotificationOpen(!notificationOpen)}>
                        <FaBell size={25} />
                    </button>
                    {notificationOpen && (
                        <ul className="absolute right-5 top-16 mt-2 w-70 h-70 border-2 border-purple-800 bg-white text-black shadow-lg rounded-lg overflow-hidden">
                            <li className="px-3 py-2 cursor-pointer"> Notification </li>
                            <div className="px-2 py-1 overflow-y-auto h-56">
                                <ul className="">
                                    <li className="px-2 mb-2 bg-purple-100 hover:bg-gray-200 border border-purple-700 rounded"> Your have job enquiry </li>
                                    <li className="px-2 mb-2 bg-gray-100 hover:bg-purple-50 border border-black rounded"> Your have job enquiry </li>
                                    <li className="px-2 mb-2 bg-purple-100 hover:bg-gray-200 border border-purple-700 rounded"> Your have job enquiry </li>
                                    <li className="px-2 mb-2 bg-gray-100 hover:bg-purple-50 border border-black rounded"> Your have job enquiry </li>
                                    <li className="px-2 mb-2 bg-purple-100 hover:bg-gray-200 border border-purple-700 rounded"> Your have job enquiry </li>
                                    <li className="px-2 mb-2 bg-gray-100 hover:bg-purple-50 border border-black rounded"> Your have job enquiry </li>
                                    <li className="px-2 mb-2 bg-purple-100 hover:bg-gray-200 border border-purple-700 rounded"> Your have job enquiry </li>
                                    <li className="px-2 mb-2 bg-gray-100 hover:bg-purple-50 border border-black rounded"> Your have job enquiry </li>
                                    <li className="px-2 mb-2 bg-purple-100 hover:bg-gray-200 border border-purple-700 rounded"> Your have job enquiry </li>
                                    <li className="px-2 mb-2 bg-gray-100 hover:bg-purple-50 border border-black rounded"> Your have job enquiry </li>
                                    <li className="px-2 mb-2 bg-purple-100 hover:bg-gray-200 border border-purple-700 rounded"> Your have job enquiry </li>
                                    <li className="px-2 mb-2 bg-gray-100 hover:bg-purple-50 border border-black rounded"> Your have job enquiry </li>
                                </ul>
                            </div>
                        </ul>
                    )} */}
                    <Link to='/home'>
                        <button className="md:hidden text-white" >
                            <FaHome size={27} />
                        </button>
                    </Link>

                    {/* User Info (Hidden on Small Screens) */}
                    <div className="hidden md:block text-white text-right">
                        <h5 className="font-bold text-xl">{user.name}</h5>
                        <p className="text-sm">{user.role}</p>
                    </div>

                    {/* Profile Picture (Dropdown) */}
                    <div className="relative">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
                            <img src={`https://ui-avatars.com/api/?name=${user.name}background=fff1f1&color=080e4d`} alt=""  className="rounded-4xl h-12" />
                            {/* <FaUserCircle size={35} className="text-white" /> */}
                        </button>

                        {menuOpen && (
                            <ul className="absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-lg overflow-hidden">
                                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Profile</li>
                                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Settings</li>
                                <Link to="/">
                                    <li className="px-4 py-2 hover:bg-red-500 hover:text-white cursor-pointer">Logout</li>
                                </Link>
                            </ul>
                        )}
                    </div>
                </div>
             
            </div>

            {/* Sidebar */}
            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} isMobile={isMobile} />
        </div>
    );
};

export default Navbar;