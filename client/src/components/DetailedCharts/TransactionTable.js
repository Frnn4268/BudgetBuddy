import React, { useState } from 'react';
import TransactionTableHeader from './TransactionTableHeader';
import TransactionTableRow from './TransactionTableRow';
import Pagination from './Pagination';

const TransactionTable = ({ transactions }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = transactions.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Filtered Transactions</h2>
      <table className="w-full bg-white rounded-xl shadow-md">
        <TransactionTableHeader />
        <tbody>
          {currentItems.map(transaction => (
            <TransactionTableRow key={transaction._id} transaction={transaction} />
          ))}
        </tbody>
      </table>
      <Pagination totalPages={totalPages} currentPage={currentPage} paginate={paginate} />
    </div>
  );
};

export default TransactionTable;