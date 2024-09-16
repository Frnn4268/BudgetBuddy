import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/register`, values);
        toast.success('Registered successfully!', {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
        setTimeout(() => {
          window.location.href = '/login';
        }, 3000); 
      } catch (error) {
        console.error(error);
        toast.error('Registration failed. Please try again.', {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      }
    },
  });

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-black">
      <ToastContainer theme="dark" />
      <div className="bg-gray-800 p-6 rounded shadow-md w-full max-w-4xl mx-4 flex">
        <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
          <div className="w-full">
            <h2 className="text-3xl font-bold text-yellow-500 mb-6 text-center">Register</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Name"
                  className={`w-full p-3 border rounded bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-700'}`}
                />
                {formik.touched.name && formik.errors.name ? (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
                ) : null}
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Email"
                  className={`w-full p-3 border rounded bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-700'}`}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                ) : null}
              </div>
              <div className="mb-6 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Password"
                  className={`w-full p-3 border rounded bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-700'}`}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                  style={{ top: '50%', transform: 'translateY(-50%)' }}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
                {formik.touched.password && formik.errors.password ? (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
                ) : null}
              </div>
              <button type="submit" className="w-full bg-yellow-500 text-black p-3 rounded hover:bg-yellow-600 transition-colors duration-300">Register</button>
            </form>
          </div>
        </div>
        <div className="w-1/2 hidden md:block">
          <img src="/images/register_image.jpg" alt="Register" className="h-full w-full object-cover rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default Register;