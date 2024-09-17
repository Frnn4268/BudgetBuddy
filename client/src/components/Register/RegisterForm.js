import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import InputField from './InputField';
import PasswordInputField from './PasswordInputField';

const RegisterForm = () => {
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
    <form onSubmit={formik.handleSubmit}>
      <InputField
        type="text"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Name"
        error={formik.errors.name}
        touched={formik.touched.name}
      />
      <InputField
        type="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Email"
        error={formik.errors.email}
        touched={formik.touched.email}
      />
      <PasswordInputField
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Password"
        error={formik.errors.password}
        touched={formik.touched.password}
        showPassword={showPassword}
        togglePasswordVisibility={togglePasswordVisibility}
      />
      <button type="submit" className="w-full bg-yellow-600 text-white font-bold p-3 rounded hover:bg-yellow-700 transition-colors duration-300">Register</button>
      <div className="mt-4 text-center text-white">
        <p>Already have an account? <a href="/login" className="text-yellow-500 hover:underline">Go to Login</a></p>
      </div>
    </form>
  );
};

export default RegisterForm;