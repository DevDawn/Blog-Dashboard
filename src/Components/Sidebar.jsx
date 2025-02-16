import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaPenNib, FaEdit, FaSearch, FaChartLine, FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';  // Correct import path

const Sidebar = () => {
    const location = useLocation(); // This hook returns the current location object
    const { theme, toggleTheme } = useContext(ThemeContext); // Using context to manage theme

    return (
        <div className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} w-72 h-screen flex flex-col`}>
            <div className="px-5 py-4">
                <img src="https://guruhub.ng/storage/2022/05/20240120_081354-1536x410.png" alt="Guru Blog" className="h-12" />
                <h1 className="text-xl font-semibold mt-3">Blog Dashboard</h1>
            </div>
            <ul className="flex-grow">
                {[
                    { path: '/', label: 'Dashboard', icon: <FaHome /> },
                    { path: '/posts', label: 'Posts', icon: <FaPenNib /> },
                    { path: '/create-post', label: 'Create Post', icon: <FaChartLine /> },
                    { path: '/edit-posts', label: 'Edit Posts', icon: <FaEdit /> }
                ].map(link => (
                    <li key={link.path} className={`flex items-center px-5 py-2 hover:bg-gray-700 ${location.pathname === link.path ? 'bg-blue-500' : ''}`}>
                        {link.icon}
                        <Link className="ml-2" to={link.path}>{link.label}</Link>
                    </li>
                ))}
            </ul>
            <div className="px-5 py-4">
                {/* <div className="relative">
                    <input type="text" placeholder="Search blog..." 
                           className="w-full h-10 px-4 bg-gray-900 focus:outline-none focus:ring focus:border-blue-300"/>
                    <button className="absolute inset-y-0 right-0 px-4 flex items-center justify-center text-gray-400 bg-gray-700 hover:text-white">
                        <FaSearch />
                    </button>
                </div> */}
            </div>
            <div className="px-5 py-4 flex justify-center">
                <button onClick={toggleTheme} className="flex items-center px-3 py-2 rounded text-sm font-medium leading-5 focus:outline-none focus:shadow-outline">
                    {theme === 'dark' ? <FaSun className="mr-2" /> : <FaMoon className="mr-2" />}
                    Toggle Theme
                </button>
            </div>
        </div>
    );
}


export default Sidebar;
