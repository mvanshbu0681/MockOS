"use client";
import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa';
import { Dock } from 'react-osx-dock';

const DockMain = () => {
  return (
    <div>
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="bg-opacity-10 backdrop-blur rounded-xl p-4 border border-[#ffffff25] dock-container">
          {/*<div className="flex items-center space-x-4">*/}
            {/* <a className='hover:scale-110 ease-in-out duration-300' href="https://www.linkedin.com/in/arnabroy25" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={25} color="white" />
            </a>
            <a className='hover:scale-110 ease-in-out duration-300' href="https://www.instagram.com/arnabroy__" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={25} color="white" />
            </a>
            <a className='hover:scale-110 ease-in-out duration-300' href="https://www.github.com/arnabdotpy" target="_blank" rel="noopener noreferrer">
              <FaGithub size={25} color="white" />
            </a>
            <a href="https://www.twitter.com/ArnabRoy25" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={25} color="white" />
            </a> */}
            <Dock itemWidth={50} magnification={1} magnifyDirection='up'>

              {['finder','slack', 'spotify', 'guitar-pro', 'terminal', 'trash'].map((letter) => (
                <img
                  className="letter"
                  src={`${letter}.png`}
                  onClick={() => console.log(letter)}
                  key={letter}
                />
              ))}
            </Dock>
          </div>
        </div>
      </div>
    // </div>
  )
}

export default DockMain
