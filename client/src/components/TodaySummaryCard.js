import React from 'react';
import { FaChartPie } from 'react-icons/fa';

const TodaySummaryCard = ({ transactionCount, totalAmount }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full h-full flex flex-col justify-center">
      <h2 className="text-2xl font-bold mb-6 flex items-center justify-center text-yellow-500">
        <FaChartPie className="mr-2" /> Today's Summary
      </h2>
      <div className="flex justify-center items-center text-2xl font-semibold space-x-8">
        <div className="flex flex-col items-center mx-4">
          <span className="text-gray-700">Total Transactions</span>
          <span className="text-yellow-500">{transactionCount}</span>
        </div>
        <div className="flex flex-col items-center mx-4">
          <span className="text-gray-700">Total Amount</span>
          <span className="text-yellow-500">${totalAmount.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default TodaySummaryCard;