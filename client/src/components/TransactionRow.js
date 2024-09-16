import React from 'react';
import { FaTrash } from 'react-icons/fa';

const TransactionRow = ({ transaction, onDelete }) => {
  return (
    <tr key={transaction._id}>
      <td className="border p-2">{transaction.type}</td>
      <td className="border p-2">{transaction.category}</td>
      <td className="border p-2">${transaction.amount}</td>
      <td className="border p-2">
        <button
          onClick={() => onDelete(transaction._id)}
          className="bg-red-500 text-white px-2 py-1 rounded flex items-center justify-center mx-auto"
          style={{ width: '50px' }}
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default TransactionRow;