import React, { useState } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const TransactionTable = ({ transactions, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 10;

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  const totalPages = Math.ceil(transactions.length / transactionsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/transactions/${id}`);
      onDelete(id);
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure you want to delete this transaction?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => handleDelete(id)
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    });
  };

  return (
    <div>
      <table className="w-full bg-white rounded shadow-md">
        <thead>
          <tr>
            <th className="border p-2">Type</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentTransactions.map(transaction => (
            <tr key={transaction._id}>
              <td className="border p-2">{transaction.type}</td>
              <td className="border p-2">{transaction.category}</td>
              <td className="border p-2">${transaction.amount}</td>
              <td className="border p-2">
                <button
                  onClick={() => confirmDelete(transaction._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded flex items-center justify-center w-full"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TransactionTable;