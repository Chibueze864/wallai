"use client";

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className=" mx-auto px-2 sm:px-6 lg:px-12">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              type="button" 
              className="inline-flex  items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" 
              aria-controls="mobile-menu" 
              aria-expanded="false"
            >
              <span className="sr-only"></span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start" >
            <div className="flex-shrink-0 flex items-center">
              <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
              <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
            <p  className="text-white px-3 py-2 rounded-md text-lg font-bold" style={{marginLeft:"12px",}}>Wallai</p>
            </div>
            <div className={`hidden sm:block sm:ml-6`}>
              <div className="flex space-x-4" >
                <a href="/budget" className=" text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>
                <a href="#" className="text-white  px-3 py-2 rounded-md text-sm font-medium">Team</a>
                <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                <a href="#" className="text-white  px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`sm:hidden ${isOpen ? "block" : "hidden"}`} id="mobile-menu" style={{paddingLeft:" 2vw  "}}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="/budget" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>
          <a href="#" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
          <a href="#" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
          <a href="#" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;