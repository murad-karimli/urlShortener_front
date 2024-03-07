import React, { useState } from 'react';
import axios from 'axios';
import logo from '../logo.png';
import {Link} from 'react-router-dom';

function HomePage() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5500/api/v1/shorten', { originalUrl });
      setShortUrl(response.data);
      console.log(response)
    } catch (error) {
      console.error('Error shortening URL', error);
    }

  };

  return (
    <div className="home-page flex flex-col items-center justify-center  bg-gray-100">
    <nav className="bg-blue-600 p-4 text-white w-[100%]">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Urlogy
        </Link>
        <div className="flex space-x-4">
          <Link to="/account" className="hover:text-gray-300">
            Account
          </Link>
          <Link to="/login" className="hover:text-gray-300">
            Login/Signup
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link to="/help" className="hover:text-gray-300">
            Help
          </Link>
        </div>
      </div>
    </nav>
      <header className='flex flex-col items-center text-2xl font-bold p-4'>
        <img src={logo} alt="logo" className='w-44 rounded-md'/>
        <h2 className='text-gray-800'>URL Shortener</h2>
      </header>
      <div className="url-shortener-form w-6/12 bg-white p-8 rounded-md shadow-md">
        <form onSubmit={handleSubmit} className='flex flex-col items-center'>
          <input
            type="url"
            placeholder='Enter your URL here'
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            className='w-full p-2 mb-4 rounded-md border-2 border-gray-300'
            required
          />
          <button type="submit" onSubmit={handleSubmit} className='bg-blue-500 p-2 text-white rounded-md w-full'>Shorten URL</button>
        </form>
        {shortUrl ? (<div className="result mt-4 p-2 rounded-md border-2 border-gray-300">
            <p className="text-gray-700">Your shortened URL is:</p>
            <a href={shortUrl} target="_blank" rel="noopener noreferrer" className='text-blue-600'>{shortUrl}</a>
          </div>) : <></>}
        {/* {  shortUrl && (
          <div className="result mt-4 p-2 rounded-md border-2 border-gray-300">
            <p className="text-gray-700">Your shortened URL is:</p>
            <a href={shortUrl} target="_blank" rel="noopener noreferrer" className='text-blue-600'>{shortUrl}</a>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default HomePage;
