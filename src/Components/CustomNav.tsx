import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const CustomNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 bg-black z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center h-16">
        <div className="text-white font-bold text-lg mr-8 cursor-pointer transition-all">
          <Link to="/">MyLogo</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-x-6 items-center justify-center">
          <div className="text-white hover:text-blue-400 cursor-pointer px-3 py-2 rounded-md transition-all">
            <Link to="/">Home</Link>
          </div>
          <div className="text-white hover:text-blue-400 cursor-pointer px-3 py-2 rounded-md transition-all">
            <Link to="/events">Events</Link>
          </div>
          <div className="text-white hover:text-blue-400 cursor-pointer px-3 py-2 rounded-md transition-all">
            <Link to="/join">Join US</Link>
          </div>
          <div className="text-white hover:text-blue-400 cursor-pointer px-3 py-2 rounded-md transition-all">
            <Link to='/'>Roadmaps</Link>
          </div>
          <div className="text-white hover:text-blue-400 cursor-pointer px-3 py-2 rounded-md transition-all">Contact</div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white cursor-pointer p-2 rounded-md transition-all" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black w-full flex flex-col items-center justify-center gap-4 py-6">
          <div className="text-white hover:text-blue-400 cursor-pointer text-lg px-4 py-2 rounded-md transition-all">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </div>
          <div className="text-white hover:text-blue-400 cursor-pointer text-lg px-4 py-2 rounded-md transition-all">
            <Link to="/events" onClick={() => setIsOpen(false)}>Events</Link>
          </div>
          <div className="text-white hover:text-blue-400 cursor-pointer text-lg px-4 py-2 rounded-md transition-all">
            <Link to="/join" onClick={() => setIsOpen(false)}>Join US</Link>
          </div>
          <div className="text-white hover:text-blue-400 cursor-pointer text-lg px-4 py-2 rounded-md transition-all">
            <Link to="/" onClick={() => setIsOpen(false)}>Roadmaps</Link>
          </div>
          <div className="text-white hover:text-blue-400 cursor-pointer text-lg px-4 py-2 rounded-md transition-all">Contact</div>
        </div>
      )}
    </nav>
  );
};

export default CustomNav;
