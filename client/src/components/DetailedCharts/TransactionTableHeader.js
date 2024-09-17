import React from 'react';

const TransactionTableHeader = () => {
  return (
    <thead className="bg-gray-200">
      <tr>
        <th className="border p-2 text-left">Type</th>
        <th className="border p-2 text-left">Category</th>
        <th className="border p-2 text-left">Amount</th>
        <th className="border p-2 text-left">Date</th>
      </tr>
    </thead>
  );
};

export default TransactionTableHeader;