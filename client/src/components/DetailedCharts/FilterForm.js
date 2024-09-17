import React from 'react';

const FilterForm = ({ filters, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <label className="block text-gray-700">Start Date</label>
        <input
          type="date"
          name="startDate"
          value={filters.startDate}
          onChange={handleChange}
          className="mt-1 block w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">End Date</label>
        <input
          type="date"
          name="endDate"
          value={filters.endDate}
          onChange={handleChange}
          className="mt-1 block w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <input
          type="text"
          name="category"
          value={filters.category}
          onChange={handleChange}
          className="mt-1 block w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Type</label>
        <input
          type="text"
          name="type"
          value={filters.type}
          onChange={handleChange}
          className="mt-1 block w-full"
        />
      </div>
      <button type="submit" className="bg-yellow-500 text-white py-2 px-4 rounded">Filter</button>
    </form>
  );
};

export default FilterForm;