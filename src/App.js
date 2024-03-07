import React from 'react';
import HomePage from './components/homePage';
import Login from './components/login';
import SignUp from './components/signUp';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Account from './components/account';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/account" element={<Account/>} />
      </Routes>
    </Router>
  );
}

export default App;
