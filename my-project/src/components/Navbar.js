import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <a href="#" className="text-2xl font-bold text-blue-700">Your Logo</a>
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
        <ul className={`md:flex space-x-4 text-sm ${isOpen ? 'block' : 'hidden'}`}>
          <li><a href="#about" className="hover:text-blue-700">About</a></li>
          <li><a href="#courses" className="hover:text-blue-700">Courses</a></li>
          <li><a href="#admissions" className="hover:text-blue-700">Admissions</a></li>
          <li><a href="#contact" className="hover:text-blue-700">Contact</a></li>
        </ul>
        <button className="hidden md:block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>
      </nav>
    </header>
  );
}

export default Navbar;
