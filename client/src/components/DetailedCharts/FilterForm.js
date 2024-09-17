import React from 'react';

const FilterForm = ({ filters, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4 text-center text-yellow-500">Filter Form</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Start Date</label>
        <input
          type="date"
          name="startDate"
          value={filters.startDate}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">End Date</label>
        <input
          type="date"
          name="endDate"
          value={filters.endDate}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Category</label>
        <input
          type="text"
          name="category"
          value={filters.category}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Type</label>
        <input
          type="text"
          name="type"
          value={filters.type}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <button type="submit" className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300">Filter</button>
    </form>
  );
};

export default FilterForm;