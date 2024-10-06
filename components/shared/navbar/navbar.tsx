"use client";
import React, { useState } from 'react';
import { FaApple, FaFolderOpen, FaCode, FaCogs, FaFileAlt, FaBars } from 'react-icons/fa';
import ControlPanel from './ControlPanel';
import Image from 'next/image';

const Navbar = () => {
  const formattedDate = new Date().toLocaleString('en-US', {
    weekday: 'short', 
    month: 'short',  
    day: 'numeric',  
    hour: 'numeric', 
    minute: 'numeric',
    hour12: true     
  });
  const [controlPanelOpen, setControlPanelOpen] = useState(false);


  const toggleControlPanel = () => {
    setControlPanelOpen(!controlPanelOpen);
  };

  return (
    <div>
      <nav className="bg-blue-900 bg-opacity-60 backdrop-filter backdrop-blur-xl p-1 w-full fixed top-0 left-1/2 transform -translate-x-1/2 shadow-xl z-10">
        <div className="flex justify-between items-center h-full">

          <div className="flex items-center gap-6 text-white pl-4">
            <FaApple className="text-white text-xl cursor-pointer hover:text-gray-300" />
            <p className="hover:text-blue-500 cursor-pointer">File</p>
            <p className="hover:text-blue-500 cursor-pointer">Edit</p>
            <p className="hover:text-blue-500 cursor-pointer">View</p>
            <p className="hover:text-blue-500 cursor-pointer">Window</p>
            <p className="hover:text-blue-500 cursor-pointer">Workspace</p>
            <p className="hover:text-blue-500 cursor-pointer">Help</p>
          </div>


          <div className="flex items-center gap-4 text-white pr-4">
            <button onClick={toggleControlPanel} className="focus:outline-none">
              <Image
                src="/cc.png"
                alt="control center"
                width={30}
                height={30}
                style={{ objectFit: 'contain' ,padding:5}}
                priority
              />
            </button>
            <p>{formattedDate}</p>
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
