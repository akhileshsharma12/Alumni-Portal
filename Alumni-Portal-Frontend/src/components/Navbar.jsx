import React, { useState, useEffect } from "react";
import main_logo from "../assets/ghrua-white.png";
import { FaBars, FaBell, FaHome, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1024);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

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
                        <Link to="/home">
                            <FaHome size={29} className="cursor-pointer" />
                        </Link>
                        <FaBell size={27} className="cursor-pointer" />
                    </div>

                    {/* Mobile Menu Toggle */}

                    <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
                        <FaBell size={25} />
                    </button>
                    <Link to='/home'>
                        <button className="md:hidden text-white" >
                            <FaHome size={27} />
                        </button>
                    </Link>

                    {/* User Info (Hidden on Small Screens) */}
                    <div className="hidden md:block text-white text-right">
                        <h5 className="font-bold text-lg">Akhilesh_Sh</h5>
                        <p className="text-sm">Alumni</p>
                    </div>

                    {/* Profile Picture (Dropdown) */}
                    <div className="relative">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
                            <FaUserCircle size={35} className="text-white" />
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