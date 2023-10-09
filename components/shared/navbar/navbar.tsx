import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-900 p-4 w-full fixed top-0 shadow-xl z-10"> {/* Add z-10 for higher z-index */}
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
    </div>
  )
}

export default Navbar
