import React from 'react';
import { Bar } from 'react-chartjs-2';

const TransactionChart = ({ chartData }) => {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Today's Transactions</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default TransactionChart;