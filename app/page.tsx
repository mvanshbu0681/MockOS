import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'; // Import the icons you want to use
import CodeBox from '@/components/home/CodeBox';
import Image from 'next/image';
import Images from '@/images/images';

function Home() {
  return (
    // <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-600 via-gray-700 to-gray-900 h-screen overflow-hidden">
    <div className="bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-gray-600 via-gray-700 to-black h-screen overflow-hidden">
      <nav className="bg-gray-900 p-4 w-full fixed top-0 shadow-xl">
        <div className="flex justify-between items-center h-full">
          <div className="text-white font-semibold text-2xl pl-4">Arnab Roy</div>
          <div className='flex gap-4 text-white pr-4'>
            <p>Projects</p>
            <p>Experience</p>
            <p>Skills</p>
            <p>Education</p>
            <p>Resume</p>
          </div>
        </div>
      </nav>
      <CodeBox />
      <div className="fixed bottom-4 right-4 flex items-center space-x-4">
        <a href="https://www.linkedin.com/in/arnabroy25" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={25} color="white" /> {/* Use the LinkedIn icon */}
        </a>
        <a href="https://www.instagram.com/arnabroy__" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={25} color="white" /> {/* Use the Instagram icon */}
        </a>
        <a href="https://www.github.com/arnabdotpy" target="_blank" rel="noopener noreferrer">
          <FaGithub size={25} color="white" /> {/* Use the GitHub icon */}
        </a>
      </div>
    </div>
  );
}

export default Home;