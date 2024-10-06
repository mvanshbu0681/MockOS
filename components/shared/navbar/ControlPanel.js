import React from "react";
import {
  FaWifi,
  FaBluetooth,
  FaAirbnb,
  FaMoon,
  FaWindowRestore,
  FaTv,
  FaMusic,
} from "react-icons/fa";

const ControlPanel = () => {
  return (
    <div className="bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-lg w-[300px] p-4 rounded-lg grid gap-2">
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-gray-700 p-2 rounded-lg shadow-lg text-white flex flex-col items-center">
          <FaWifi className="text-blue-500 text-xl mb-1" />
          <p className="text-sm">Wi-Fi</p>
          <p className="text-xs text-gray-400">STUD</p>
        </div>
        <div className="bg-gray-700 p-2 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg shadow-lg text-white flex flex-col items-center">
          <FaBluetooth className="text-blue-500 text-xl mb-1" />
          <p className="text-sm">Bluetooth</p>
          <p className="text-xs text-gray-400">On</p>
        </div>
        <div className="bg-gray-700 p-2 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg shadow-lg text-white flex flex-col items-center col-span-2">
          <FaAirbnb className="text-blue-500 text-xl mb-1" />
          <p className="text-sm">Airdrop</p>
          <p className="text-xs text-gray-400">Everyone</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="bg-gray-700 p-2 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg shadow-lg text-white flex flex-col items-center">
          <FaMoon className="text-xl mb-1" />
          <p className="text-xs">Focus</p>
        </div>
        <div className="bg-gray-700 p-2 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg shadow-lg text-white flex flex-col items-center">
          <FaWindowRestore className="text-xl mb-1" />
          <p className="text-xs">Stage Manager</p>
        </div>
        <div className="bg-gray-700 p-2 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg shadow-lg text-white flex flex-col items-center">
          <FaTv className="text-xl mb-1" />
          <p className="text-xs">Screen Mirroring</p>
        </div>
      </div>

      <div className="bg-gray-700 p-2 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg shadow-lg text-white">
        <p className="text-sm">Display</p>
        <input type="range" className="w-full mt-1" />
      </div>

      <div className="bg-gray-700 p-2 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg shadow-lg text-white">
        <p className="text-sm">Sound</p>
        <input type="range" className="w-full mt-1" />
      </div>

      <div className="bg-gray-700 p-2 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg shadow-lg text-white flex items-center">
        <FaMusic className="text-xl mr-2" />
        <p className="text-sm">Music</p>
      </div>
    </div>
  );
};

export default ControlPanel;
