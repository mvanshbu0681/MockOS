"use client";
import React, { useState } from 'react';
import { FaApple, FaFolderOpen, FaCode, FaCogs, FaFileAlt, FaBars } from 'react-icons/fa';
import ControlPanel from './ControlPanel';

const Navbar = () => {
  const [controlPanelOpen, setControlPanelOpen] = useState(false);

  
  const toggleControlPanel = () => {
    setControlPanelOpen(!controlPanelOpen);
  };

  return (
    <div>
      <nav className="bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-lg p-2 w-[85%] fixed top-0 left-1/2 transform -translate-x-1/2 shadow-md z-10 rounded-xl">
        <div className="flex justify-between items-center h-full">
          
          <div className="flex items-center gap-6 text-white pl-4">
            <FaApple className="text-white text-lg cursor-pointer hover:text-gray-300" />
            <p className="hover:text-blue-500 cursor-pointer">File</p>
            <p className="hover:text-blue-500 cursor-pointer">Edit</p>
            <p className="hover:text-blue-500 cursor-pointer">View</p>
            <p className="hover:text-blue-500 cursor-pointer">Help</p>
          </div>

          
          <div className="flex items-center gap-4 text-white pr-4">
            <FaFolderOpen className="text-white text-lg cursor-pointer hover:text-blue-500" />
            <FaCode className="text-white text-lg cursor-pointer hover:text-blue-500" />
            <FaCogs className="text-white text-lg cursor-pointer hover:text-blue-500" />
            
            <button onClick={toggleControlPanel} className="focus:outline-none">
              <FaBars className="text-white text-lg cursor-pointer hover:text-blue-500" />
            </button>
          </div>
        </div>
      </nav>

      {controlPanelOpen && (
        <div className="fixed top-16 right-8 z-20">
          <ControlPanel />
        </div>
      )}
    </div>
  );
};

export default Navbar;
