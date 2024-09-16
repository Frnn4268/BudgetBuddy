import React from 'react';

const TransactionTable = ({ transactions }) => {
  return (
    <table className="w-full bg-white rounded shadow-md">
      <thead>
        <tr>
          <th className="border p-2">Type</th>
          <th className="border p-2">Category</th>
          <th className="border p-2">Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction._id}>
            <td className="border p-2">{transaction.type}</td>
            <td className="border p-2">{transaction.category}</td>
            <td className="border p-2">${transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;