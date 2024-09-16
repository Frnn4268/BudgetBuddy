import React from 'react';

const DeleteConfirmationDialog = ({ onConfirm, onCancel }) => {
  return (
    <div className="bg-white p-6 rounded shadow-md text-center">
      <h1 className="text-xl font-bold mb-4">Confirm to delete</h1>
      <p className="mb-4">Are you sure you want to delete this transaction?</p>
      <div className="flex justify-center space-x-4">
        <button
          onClick={onConfirm}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Yes
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmationDialog;