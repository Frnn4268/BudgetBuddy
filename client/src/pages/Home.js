import React from 'react';

const Home = () => {
  return (
    <div className="relative flex items-center justify-center min-h-[calc(100vh-4rem)] bg-gray-100 overflow-hidden font-roboto">
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-fade-in"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-fade-in"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-fade-in"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-fade-in"></div>
      <h1 className="relative text-4xl font-bold text-gray-800 animate-slide-in">Welcome to the Personal Finance App</h1>
    </div>
  );
};

export default Home;