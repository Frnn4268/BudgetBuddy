import React from 'react';

const TransactionTable = ({ transactions }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Filtered Transactions</h2>
      <table className="w-full bg-white rounded shadow-md">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2 text-left">Type</th>
            <th className="border p-2 text-left">Category</th>
            <th className="border p-2 text-left">Amount</th>
            <th className="border p-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction._id}>
              <td className="border p-2">{transaction.type}</td>
              <td className="border p-2">{transaction.category}</td>
              <td className="border p-2">{transaction.amount}</td>
              <td className="border p-2">{new Date(transaction.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;