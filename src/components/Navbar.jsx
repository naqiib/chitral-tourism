import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Chitral Tourism</h1>
        <ul className="flex gap-6 font-medium">
          <li><a href="#" className="hover:text-blue-300">Home</a></li>
          <li><a href="#" className="hover:text-blue-300">Festival</a></li>
          <li><a href="#" className="hover:text-blue-300">Gallery</a></li>
          <li><a href="#" className="hover:text-blue-300">Blog</a></li>
          <li><a href="#" className="hover:text-blue-300">About Us</a></li>
          <li><a href="#" className="hover:text-blue-300">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
