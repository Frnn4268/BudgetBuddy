import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const FilterForm = ({ filters, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-yellow-500">Filter Form</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold">Start Date</label>
        <input
          type="date"
          name="startDate"
          value={filters.startDate}
          onChange={handleChange}
          placeholder="Select start date"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold">End Date</label>
        <input
          type="date"
          name="endDate"
          value={filters.endDate}
          onChange={handleChange}
          placeholder="Select end date"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold">Category</label>
        <input
          type="text"
          name="category"
          value={filters.category}
          onChange={handleChange}
          placeholder="Enter category"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold">Type</label>
        <input
          type="text"
          name="type"
          value={filters.type}
          onChange={handleChange}
          placeholder="Enter type"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <button type="submit" className="bg-yellow-500 text-white font-bold py-2 rounded-md hover:bg-yellow-600 transition duration-300 w-full flex items-center justify-center space-x-2">
        <FontAwesomeIcon icon={faFilter} />
        <span>Filter</span>
      </button>
    </form>
  );
};

export default FilterForm;