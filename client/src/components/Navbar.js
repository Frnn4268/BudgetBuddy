import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black p-4 h-16">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="text-yellow-500 text-lg font-bold">
          <Link to="/">BudgetBuddy</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-yellow-500 transition-colors duration-300">Home</Link>
          <Link to="/login" className="text-white hover:text-yellow-500 transition-colors duration-300">Login</Link>
          <Link to="/register" className="text-white hover:text-yellow-500 transition-colors duration-300">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;