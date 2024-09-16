import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [userId, setUserId] = useState(null);
  const [formData, setFormData] = useState({ type: '', category: '', amount: '' });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      setUserId(decoded.id);
    } else {
      window.location.href = '/login'; // Redirigir al login si no hay token
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

    fetchTransactions();
  }, [userId]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login'; // Redirigir al login después de cerrar sesión
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

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      <form onSubmit={handleSubmit}>
        <input type="text" name="type" value={formData.type} onChange={handleChange} placeholder="Type" required />
        <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" required />
        <input type="number" name="amount" value={formData.amount} onChange={handleChange} placeholder="Amount" required />
        <button type="submit">Add Transaction</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction._id}>
              <td>{transaction.type}</td>
              <td>{transaction.category}</td>
              <td>${transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;