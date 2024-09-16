import React from 'react';

const Home = () => {
  return (
    <div className="relative flex items-center justify-center min-h-[calc(100vh-4rem)] bg-black overflow-hidden font-roboto">
      <div className="absolute top-10 left-10 w-80 h-80 bg-yellow-500 opacity-40 rounded-full transform rotate-45 filter blur-2xl animate-circle-move"></div>
      <div className="absolute top-10 right-10 w-80 h-80 bg-yellow-500 opacity-20 rounded-full transform rotate-45 filter blur-2xl animate-circle-move"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-yellow-500 opacity-40 rounded-full transform rotate-45 filter blur-2xl animate-circle-move"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-500 opacity-20 rounded-full transform rotate-45 filter blur-2xl animate-circle-move"></div>
      <div className="relative flex flex-col items-center space-y-4">
        <h1 className="text-6xl font-bold text-white animate-fade-in-slide-up shadow-lg">
          Welcome to 
        </h1>
        <span className="text-6xl font-bold text-yellow-500 hover:scale-125 transition-transform duration-300">
          BudgetBuddy
        </span>
        <h2 className="text-4xl font-bold text-white animate-fade-in-slide-up shadow-lg">
          your Personal Finance App
        </h2>
      </div>
    </div>
  );
};

export default Home;