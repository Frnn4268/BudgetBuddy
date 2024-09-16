import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 h-16">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="text-white text-lg font-bold">
          <Link to="/">Personal Finance App</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
          <Link to="/register" className="text-white hover:text-gray-200">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;