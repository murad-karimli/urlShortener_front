import React, { useState } from 'react';
import axios from 'axios';
import logo from '../logo.png';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginFailed, setLoginFailed] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const credentials = { email, password };
    try {
      const response = await axios.post('http://localhost:5500/api/v1/auth/login', JSON.stringify(credentials), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      navigate('/');
      setLoginFailed(false);
    } catch (error) {
      console.error('Login Error', error);
      setLoginFailed(true);
    }
  };

  return (
    <>
      <header className='flex flex-col items-center justify-between text-2xl font-bold p-4'>
        <img src={logo} alt="logo" className='w-44 rounded-md'/>
      </header>
      <div className="login-form flex flex-col justify-center items-center min-h-screen w-6/12 m-auto">
        <h2 className='text-white text-2xl font-bold p-4'>
          Login or SignUp
        </h2>
        <form onSubmit={handleSubmit} className='flex items-center justify-center flex-col'>
          <div className="form-group flex flex-col">
            <input
              type="text"
              id="username"
              value={email}
              placeholder='Email'
              className={`m-2 p-2 rounded-xl border-2 ${loginFailed ? 'border-red-500' : 'border-[#000]'}`}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              id="password"
              value={password}
              placeholder='Password'
              className={`m-2 p-2 rounded-xl border-2 ${loginFailed ? 'border-red-500' : 'border-[#000]'}`}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className='bg-gray-400 p-2 m-2 text-white rounded-xl font-semibold w-44'>Login</button>
          <p>If you don't have an account <a href='/register' className='text-blue-600'>Sign Up</a></p>
        </form>
      </div>
    </>
  );
}

export default Login;
