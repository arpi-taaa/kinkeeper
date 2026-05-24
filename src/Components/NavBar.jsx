import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { ImStatsDots } from 'react-icons/im';
import { RiTimeLine } from 'react-icons/ri';
import { LuMenu, LuX } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const activeLink = "flex items-center gap-2 bg-[#1B4332] text-white px-4 py-2 rounded-lg font-medium transition-all";
    const normalLink = "flex items-center gap-2 text-gray-600 hover:text-[#1B4332] px-4 py-2 transition-all font-medium";

    const mobileActiveLink = "flex items-center gap-3 bg-[#1B4332] text-white px-4 py-3 rounded-xl font-medium transition-all w-full";
    const mobileNormalLink = "flex items-center gap-3 text-gray-600 hover:text-[#1B4332] hover:bg-gray-50 px-4 py-3 rounded-xl transition-all font-medium w-full";

    return (
        <nav className="border-b bg-white border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    
                    <div className="shrink-0 flex items-center">
                        <NavLink to="/" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-[#1B4332]">
                            <img src="/logo.png" className='w-35' alt="KeenKeeper Logo" />
                        </NavLink>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => isActive ? activeLink : normalLink}
                        >
                            <FaHome className='text-lg' />
                            <span className='text-sm'>Home</span>
                        </NavLink>

                        <NavLink 
                            to="/timeline" 
                            className={({ isActive }) => isActive ? activeLink : normalLink}
                        >
                            <RiTimeLine className='text-lg' />
                            <span className='text-sm'>Timeline</span>
                        </NavLink>

                        <NavLink 
                            to="/stats" 
                            className={({ isActive }) => isActive ? activeLink : normalLink}
                        >
                            <ImStatsDots className='text-lg' />
                            <span className='text-sm'>Stats</span>
                        </NavLink>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={() => setIsOpen(!isOpen)} 
                            className="text-gray-600 focus:outline-none p-2 hover:bg-gray-50 rounded-lg transition-colors"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <LuX className="h-6 w-6" /> : <LuMenu className="h-6 w-6" />}
                        </button>
                    </div>

                </div>
            </div>

            <div className={`md:hidden transition-all duration-300 ease-in-out border-t border-gray-50 bg-white ${isOpen ? 'max-h-64 opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden pointer-events-none'}`}>
                <div className="px-4 flex flex-col gap-2">
                    <NavLink 
                        to="/" 
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) => isActive ? mobileActiveLink : mobileNormalLink}
                    >
                        <FaHome className='text-xl' />
                        <span>Home</span>
                    </NavLink>

                    <NavLink 
                        to="/timeline" 
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) => isActive ? mobileActiveLink : mobileNormalLink}
                    >
                        <RiTimeLine className='text-xl' />
                        <span>Timeline</span>
                    </NavLink>

                    <NavLink 
                        to="/stats" 
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) => isActive ? mobileActiveLink : mobileNormalLink}
                    >
                        <ImStatsDots className='text-xl' />
                        <span>Stats</span>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;