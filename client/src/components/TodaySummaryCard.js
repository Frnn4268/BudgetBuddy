import React from 'react';

const TodaySummaryCard = ({ transactionCount, totalAmount }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6 w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Today's Summary</h2>
      <div className="mb-2">
        <span className="font-semibold">Total Transactions:</span> {transactionCount}
      </div>
      <div>
        <span className="font-semibold">Total Amount:</span> ${totalAmount.toFixed(2)}
      </div>
    </div>
  );
};

export default TodaySummaryCard;