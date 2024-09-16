import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import NavbarDashboard from '../components/Dashboard/NavbarDashboard';

const DetailedCharts = () => {
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    category: '',
    type: ''
  });
  const [transactions, setTransactions] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const decoded = jwtDecode(token);
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/transactions/filtered-transactions`, {
        params: { ...filters, userId: decoded.id }
      });
      setTransactions(res.data);
    } catch (error) {
      console.error('Error fetching filtered transactions:', error);
    }
  };

  return (
    <div>
      <NavbarDashboard handleLogout={handleLogout} />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-yellow-500">Detailed Charts</h1>
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label className="block text-gray-700">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={filters.startDate}
              onChange={handleChange}
              className="mt-1 block w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">End Date</label>
            <input
              type="date"
              name="endDate"
              value={filters.endDate}
              onChange={handleChange}
              className="mt-1 block w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              value={filters.category}
              onChange={handleChange}
              className="mt-1 block w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Type</label>
            <input
              type="text"
              name="type"
              value={filters.type}
              onChange={handleChange}
              className="mt-1 block w-full"
            />
          </div>
          <button type="submit" className="bg-yellow-500 text-white py-2 px-4 rounded">Filter</button>
        </form>
        <div>
          <h2 className="text-2xl font-bold mb-4">Filtered Transactions</h2>
          <table className="w-full bg-white rounded shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-2 text-left">Type</th>
                <th className="border p-2 text-left">Category</th>
                <th className="border p-2 text-left">Amount</th>
                <th className="border p-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(transaction => (
                <tr key={transaction._id}>
                  <td className="border p-2">{transaction.type}</td>
                  <td className="border p-2">{transaction.category}</td>
                  <td className="border p-2">{transaction.amount}</td>
                  <td className="border p-2">{new Date(transaction.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetailedCharts;