import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginForm from '../components/Login/LoginForm';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-black">
      <ToastContainer theme="dark" />
      <div className="bg-gray-800 p-6 rounded shadow-md w-full max-w-4xl mx-4 flex">
        <div className="w-1/2 hidden md:block">
          <img src="/images/login_image.jpg" alt="Login" className="h-full w-full object-cover rounded-xl" />
        </div>
        <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
          <div className="w-full">
            <h2 className="text-3xl font-bold text-yellow-500 mb-6 text-center">Login</h2>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;