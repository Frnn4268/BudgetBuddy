import React from 'react';
import { FaPlus } from 'react-icons/fa';

const TransactionForm = ({ formData, handleChange, handleSubmit }) => {
  return (
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
  );
};

export default TransactionForm;