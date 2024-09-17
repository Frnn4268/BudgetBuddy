import React from 'react';

const TransactionTableRow = ({ transaction }) => {
  return (
    <tr>
      <td className="border p-2">{transaction.type}</td>
      <td className="border p-2">{transaction.category}</td>
      <td className="border p-2">{transaction.amount}</td>
      <td className="border p-2">{new Date(transaction.createdAt).toLocaleDateString()}</td>
    </tr>
  );
};

export default TransactionTableRow;