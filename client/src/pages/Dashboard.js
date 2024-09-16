import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { FaPlus, FaSignOutAlt, FaTable } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import NavbarDashboard from '../components/NavbarDashboard'; 

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [todayTransactions, setTodayTransactions] = useState([]);
  const [userId, setUserId] = useState(null);
  const [formData, setFormData] = useState({ type: '', category: '', amount: '' });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      setUserId(decoded.id);
    } else {
      window.location.href = '/login';
    }
  }, []);

  useEffect(() => {
    const fetchTransactions = async () => {
      if (!userId) return;
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/transactions`, { params: { userId } });
        setTransactions(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchTodayTransactions = async () => {
      if (!userId) return;
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/transactions`, { params: { userId } });
        setTodayTransactions(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTransactions();
    fetchTodayTransactions();
  }, [userId]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const decoded = jwtDecode(token);
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/transactions`, { ...formData, userId: decoded.id });
      setTransactions([...transactions, res.data]);
      setFormData({ type: '', category: '', amount: '' });
    } catch (error) {
      console.error(error);
    }
  };

  const chartData = {
    labels: todayTransactions.map(transaction => transaction.category),
    datasets: [
      {
        label: 'Amount',
        data: todayTransactions.map(transaction => transaction.amount),
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <NavbarDashboard handleLogout={handleLogout} />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 flex items-center text-yellow-500">
          <FaTable className="mr-2" /> Dashboard
        </h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md mb-6">
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            placeholder="Type"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Amount"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <button type="submit" className="w-full bg-gray-500 text-white font-bold p-2 rounded flex items-center justify-center">
            <FaPlus className="mr-2" /> Add Transaction
          </button>
        </form>
        <div className="flex">
          <div className="w-1/2 pr-4">
            <table className="w-full bg-white rounded shadow-md">
              <thead>
                <tr>
                  <th className="border p-2">Type</th>
                  <th className="border p-2">Category</th>
                  <th className="border p-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map(transaction => (
                  <tr key={transaction._id}>
                    <td className="border p-2">{transaction.type}</td>
                    <td className="border p-2">{transaction.category}</td>
                    <td className="border p-2">${transaction.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-1/2 pl-4">
            <div className="bg-white p-6 rounded shadow-md">
              <h2 className="text-2xl font-bold mb-4">Today's Transactions</h2>
              <Bar data={chartData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;