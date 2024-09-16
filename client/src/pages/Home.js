import React from 'react';

const Home = () => {
  return (
    <div className="relative flex items-center justify-center min-h-[calc(100vh-4rem)] bg-black overflow-hidden font-roboto">
      <div className="absolute top-10 left-10 w-80 h-80 bg-yellow-500 opacity-40 rounded-full transform rotate-45 filter blur-2xl animate-fade-in"></div>
      <div className="absolute top-10 right-10 w-80 h-80 bg-yellow-500 opacity-20 rounded-full transform rotate-45 filter blur-2xl animate-fade-in"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-yellow-500 opacity-40 rounded-full transform rotate-45 filter blur-2xl animate-fade-in"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-500 opacity-20 rounded-full transform rotate-45 filter blur-2xl animate-fade-in"></div>
      <h1 className="relative text-4xl font-bold text-white animate-fade-in-slide-up shadow-lg">Welcome to the Personal Finance App</h1>
    </div>
  );
};

export default Home;