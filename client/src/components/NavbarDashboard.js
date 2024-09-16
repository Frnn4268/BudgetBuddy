import React from 'react';

const Navbar = ({ handleLogout }) => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-lg font-bold">BudgetBuddy</div>
      <div className="flex space-x-4">
        <a href="/dashboard" className="text-white hover:text-yellow-500">Dashboard</a>
        <a href="/detailed-charts" className="text-white hover:text-yellow-500">Detailed Charts</a>
        <a href="/monthly-expenses" className="text-white hover:text-yellow-500">Monthly Expenses</a>
        <a href="/settings" className="text-white hover:text-yellow-500">Settings</a>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;