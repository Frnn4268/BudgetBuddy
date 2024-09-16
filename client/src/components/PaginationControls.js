import React from 'react';

const PaginationControls = ({ currentPage, totalPages, handleNextPage, handlePreviousPage }) => {
  return (
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
  );
};

export default PaginationControls;