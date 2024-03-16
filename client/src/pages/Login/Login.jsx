
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { Spinner } from 'flowbite-react';
import {useDispatch, useSelector} from 'react-redux'
import { signInFailure,signInStart, signInSuccess } from '../../redux/user/userSlice';
import OAuth from '../Blog/components/OAuth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  // Selectors to access state from Redux store
  const errorMessage = useSelector(state => state.user.error);
  const loading = useSelector(state => state.user.loading);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInStart());

    try {
      const response = await axios.post('http://localhost:4000/api/auth/signin', {
        email,
        password,
      });

      // Handle successful sign-in
      console.log('Sign-in successful:', response.data);
      dispatch(signInSuccess(response.data));
      navigate('/');
    } catch (error) {
      // Handle sign-in error
      console.error('Sign-in error:', error.response.data);
      dispatch(signInFailure("Please fill out all the fields"));
    }
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-3 block w-full border-2 border-gray-300 rounded-md focus:ring-indigo-900 focus:border-indigo-500 placeholder-gray-500"
              placeholder="name@company.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-3 block w-full border-2 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500"
              placeholder="Enter your password"
            />
          </div>
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
            ) : "Sign In.."
          }
          </button>
            <OAuth/>
        
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</a>
        </div>
        {errorMessage && <div className="text-red-500 items-center ml-16">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Login;
