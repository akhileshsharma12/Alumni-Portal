import React from 'react';
import main_logo from '../assets/ghrua-white.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='sticky top-0 z-50 shadow-lg bg-[#5c0f8b]'>
            <div className="navbar text-white px-6 flex justify-between items-center">
                {/* Left Side - Logo & Mobile Menu */}
                <div className="flex items-center gap-2">
                    {/* Mobile Dropdown */}
                    <div className="dropdown lg:hidden">
                        <button tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </button>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white text-black rounded-box mt-3 w-52 p-2 shadow-lg">
                            <li>
                                <NavLink to="/home" className={({ isActive }) =>
                                    isActive ? "bg-purple-300 text-black px-3 py-2 rounded" : "px-3 py-2"
                                }>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) =>
                                    isActive ? "bg-purple-300 text-black px-3 py-2 rounded" : "px-3 py-2"
                                }>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({ isActive }) =>
                                    isActive ? "bg-purple-300 text-black px-3 py-2 rounded" : "px-3 py-2"
                                }>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* Logo */}
                    <img className='h-10 lg:h-12' src={main_logo} alt="GHRU Logo" />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal text-lg space-x-4">
                        <li>
                            <NavLink to="/" className={({ isActive }) =>
                                isActive ? "bg-purple-300  text-black px-4 py-2 rounded" : "px-4 py-2"
                            }>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) =>
                                isActive ? "bg-purple-300 text-black px-4 py-2 rounded" : "px-4 py-2"
                            }>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) =>
                                isActive ? "bg-purple-300 text-black px-4 py-2 rounded" : "px-4 py-2"
                            }>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Register/Login Button */}
                <div>
                    <NavLink to='/login' className="btn bg-purple-800 border-2 border-white text-white hover:bg-purple-300 hover:text-black">
                        Register/Login
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Header;
