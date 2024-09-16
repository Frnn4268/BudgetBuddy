import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { FaTable } from 'react-icons/fa';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import NavbarDashboard from '../components/NavbarDashboard';
import TransactionForm from '../components/TransactionForm';
import TransactionTable from '../components/TransactionTable';
import TransactionChart from '../components/TransactionChart';

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
    <div className="h-min-screen">
      <NavbarDashboard handleLogout={handleLogout} />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 flex items-center text-yellow-500">
          <FaTable className="mr-2" /> Dashboard
        </h1>
        <TransactionForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
        <div className="flex">
          <div className="w-1/2 pr-4">
            <TransactionTable transactions={transactions} />
          </div>
          <div className="w-1/2 pl-4">
            <TransactionChart chartData={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;