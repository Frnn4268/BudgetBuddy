import React from 'react';
import { FaPlus } from 'react-icons/fa';

const TransactionForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md mb-6 h-full flex flex-col">
      <label className="block text-gray-700 font-bold mb-1">Type</label>
      <input
        type="text"
        name="type"
        value={formData.type}
        onChange={handleChange}
        placeholder="Enter transaction type"
        className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        required
      />
      <label className="block text-gray-700 font-bold mb-1">Category</label>
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Enter transaction category"
        className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        required
      />
      <label className="block text-gray-700 font-bold mb-1">Amount</label>
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Enter transaction amount"
        className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        required
      />
      <button type="submit" className="w-full bg-yellow-500 text-white font-bold p-2 rounded-md flex items-center justify-center hover:bg-yellow-600 transition duration-200 mt-auto">
        <FaPlus className="mr-2" /> Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;