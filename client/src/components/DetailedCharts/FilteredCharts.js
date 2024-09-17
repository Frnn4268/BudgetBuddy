import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const FilteredCharts = ({ transactions }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const chartData = {
    labels: transactions.map(transaction => formatDate(transaction.createdAt)),
    datasets: [
      {
        label: 'Amount',
        data: transactions.map(transaction => transaction.amount),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const lineChartData = {
    labels: transactions.map(transaction => formatDate(transaction.createdAt)),
    datasets: [
      {
        label: 'Amount Over Time',
        data: transactions.map(transaction => transaction.amount),
        fill: false,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
      },
    ],
  };

  return (
    <div className="mt-6 bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Filtered Transactions Charts</h2>
      <div className="flex">
        <div className="w-1/2 pr-2 p-4">
          <Bar data={chartData} />
        </div>
        <div className="w-1/2 pl-2 p-4">
          <Line data={lineChartData} />
        </div>
      </div>
    </div>
  );
};

export default FilteredCharts;