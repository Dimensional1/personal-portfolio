import React, { useState } from 'react';

import { Link, NavLink } from 'react-router-dom';

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="shadow sticky z-50 top-0 w-full">
                <nav className="bg-[#080808] text-white border-gray-200 px-4  py-4">
                    <div className="flex flex-wrap justify-between items-center mx-auto  px-3 ">
                        <Link to="/" className="flex items-center">
                            <h1 className='font-sans font-bold text-2xl'>Portfolio</h1>
                        </Link>
                      
                        <div className="flex items-center lg:order-1">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="lg:hidden block text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                        <div
                            className={`${
                                isMenuOpen ? 'block' : 'hidden'
                            } w-full lg:flex lg:w-auto lg:order-1`}
                            id="mobile-menu-2"
                        >
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-10 lg:mt-0">
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-red-600" : "text-white"} border-b border-gray-100 hover:bg-[#080808] lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        About
                                    </NavLink>
                                </li>
                             
                                <li>
                                    <NavLink
                                        to="/blog"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-[#080808] lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Blog
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/Contact"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-[#080808] lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
