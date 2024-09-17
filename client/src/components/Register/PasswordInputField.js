import React from 'react';

const PasswordInputField = ({ name, value, onChange, onBlur, placeholder, error, touched, showPassword, togglePasswordVisibility }) => {
  return (
    <div className="mb-6 relative">
      <input
        type={showPassword ? "text" : "password"}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`w-full p-3 border rounded bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 ${touched && error ? 'border-red-500' : 'border-gray-700'}`}
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      >
        {showPassword ? "Hide" : "Show"}
      </button>
      {touched && error ? (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      ) : null}
    </div>
  );
};

export default PasswordInputField;