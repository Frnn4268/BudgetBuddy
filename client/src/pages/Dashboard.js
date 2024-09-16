import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = ({ userId }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/transactions`, { params: { userId } });
        setTransactions(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTransactions();
  }, [userId]);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction._id}>{transaction.category}: ${transaction.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;