import React, { useState } from "react";
import main_logo from "../assets/ghrua-white.png";
import { FaBars, FaBell, FaHome, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="bg-purple-800 px-6 py-2 flex justify-between items-center w-full fixed top-0 left-0 z-50">
            {/* Left: Logo */}
            <div className="flex items-center">
                <img className="h-8 sm:h-10 lg:h-[2.80rem]" src={main_logo} alt="GHRU Logo" />
            </div>

            {/* Right: Icons + Profile */}
            <div className="flex items-center gap-x-6 ml-auto">
                {/* Home & Bell Icons (Hidden on Mobile) */}
                <div className="hidden md:flex items-center gap-x-6 text-white">
                    <Link to="/">
                        <FaHome size={29} className="cursor-pointer" />
                    </Link>
                    <FaBell size={27} className="cursor-pointer" />
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
                    <FaBars size={24} />
                </button>

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
                            <li className="px-4 py-2 hover:bg-red-500 hover:text-white cursor-pointer">Logout</li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
