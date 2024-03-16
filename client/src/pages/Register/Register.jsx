// Register.js
import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

import { Spinner } from 'flowbite-react';
import OAuth from '../Blog/components/OAuth';
import { useDispatch } from 'react-redux';



const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true on form submission

    if (!formData.username || !formData.email || !formData.password) {
      setErrorMessage('Please fill out all the fields');
      setLoading(false); // Set loading back to false since there's an error
      return;
    }

    try {
      const res = await fetch('http://localhost:4000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.message);
        setLoading(false); // Set loading back to false since there's an error
        return;
      }

      // If everything is successful, navigate to login page
      // dispatch(signInSuccess(data));
      navigate('/login');
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false); // Set loading back to false since there's an error
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Create an Account</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className='block text-sm font-medium text-gray-700'>User Name</label>
            <input 
              id='username'
              name='username'
              type="text" 
              className="mt-1 p-3 block w-full border-2 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500"
              placeholder="Enter your username"
              onChange={handleChange}
              />
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 p-3 block w-full border-2 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500"
              placeholder="name@company.com"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              // name="password"
              type="password"
              // autoComplete="new-password"
              required
              className="mt-1 p-3 block w-full border-2 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500"
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>
          {/* <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              autoComplete="new-password"
              required
              className="mt-1 p-3 block w-full border-2 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500"
              placeholder="Confirm your password"
            />
          </div> */}
          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent text-sm font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
         disabled={loading}
         >
          {
            loading? (
              <>
              
             
              <Spinner aria-label="Default status example" />
              <span className='pl-3'>Loading...</span>
              </>
            ) : "Register"
          }
     
          </button>
          <OAuth/>
        </form>
        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">Already have an account? </span>
          <Link to="/login"  className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Sign in</Link>
        </div>
        {
          errorMessage && (
            <alert >
              {errorMessage}
            </alert>
          )
        }
      </div>
    </div>
  );
};

export default Register;
