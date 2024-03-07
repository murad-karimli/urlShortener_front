import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.png';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username,setUsername]= useState('')
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    const credentials = { email, password };
    try {
      await axios.post('http://localhost:5500/api/v1/auth/register', JSON.stringify(credentials), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      navigate('/login');
    } catch (error) {
      console.error('Registration Error', error);
    }
  };

  return (
    <>
      <header className='flex flex-col items-center justify-between text-2xl font-bold p-4'>
        <img src={logo} alt="logo" className='w-44 rounded-md'/>
      </header>
      <div className="signup-form flex flex-col justify-center items-center min-h-screen w-6/12 m-auto">
        <h2 className='text-white text-2xl font-bold p-4'>
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className='flex items-center justify-center flex-col'>
          <div className="form-group flex flex-col">
            <input
              type="text"
              id="email"
              value={email}
              placeholder='Email'
              className='m-2 p-2 rounded-xl border-2 border-[#000]'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
              <input
              type="text"
              id="username"
              value={username}
              placeholder='Username'
              className='m-2 p-2 rounded-xl border-2 border-[#000]'
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              id="password"
              value={password}
              placeholder='Password'
              className='m-2 p-2 rounded-xl border-2 border-[#000]'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              placeholder='Confirm Password'
              className='m-2 p-2 rounded-xl border-2 border-[#000]'
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className='bg-gray-400 p-2 m-2 text-white rounded-xl font-semibold w-44'>Sign Up</button>
          <p>Already have an account? <a href='/login' className='text-blue-600'>Login</a></p>
        </form>
      </div>
    </>
  );
}

export default SignUp;
