import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ handleLogout }) => {
  return (
    <nav className="bg-black p-4 h-16">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="text-yellow-500 text-lg font-bold">
          <a href="/dashboard" className="hover:text-white transition-colors duration-400">BudgetBuddy</a>
        </div>
        <div className="space-x-4">
          <a href="/dashboard" className="text-white hover:text-yellow-500 transition-colors duration-300">Dashboard</a>
          <a href="/detailed-charts" className="text-white hover:text-yellow-500 transition-colors duration-300">Detailed Charts</a>
          <a href="/monthly-expenses" className="text-white hover:text-yellow-500 transition-colors duration-300">Monthly Expenses</a>
          <a href="/settings" className="text-white hover:text-yellow-500 transition-colors duration-300">Settings</a>
          <button 
            onClick={handleLogout} 
            className="bg-red-500 text-white font-bold px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300 shadow-lg"
          >
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;