import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import NavbarDashboard from '../components/Dashboard/NavbarDashboard';
import FilterForm from '../components/DetailedCharts/FilterForm';
import TransactionTable from '../components/DetailedCharts/TransactionTable';
import FilteredCharts from '../components/DetailedCharts/FilteredCharts';

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
        <div className="flex">
          <div className="w-1/2 pr-4 bg-white p-6 rounded-md shadow-xl">
            <FilterForm filters={filters} handleChange={handleChange} handleSubmit={handleSubmit} />
          </div>
          <div className="w-1/2 pl-4">
            <TransactionTable transactions={transactions} />
          </div>
        </div>
        <FilteredCharts transactions={transactions} />
      </div>
    </div>
  );
};

export default DetailedCharts;