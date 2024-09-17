import React from 'react';

const InputField = ({ type, name, value, onChange, onBlur, placeholder, error, touched }) => {
  return (
    <div className="mb-4">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`w-full p-3 border rounded bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 ${touched && error ? 'border-red-500' : 'border-gray-700'}`}
      />
      {touched && error ? (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      ) : null}
    </div>
  );
};

export default InputField;