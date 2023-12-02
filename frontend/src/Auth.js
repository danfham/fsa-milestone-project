// src/components/Auth/Auth.js

import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/api/register', { email, password });
      console.log('Registration successful');
    } catch (error) {
      console.error('Error during registration:', error.response.data.error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      const token = response.data.token;
      console.log('Login successful. Token:', token);
      // Save the token in local storage or context for future requests
    } catch (error) {
      console.error('Error during login:', error.response.data.error);
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Registration</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="auth-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="auth-input"
      />
      <button onClick={handleRegister} className="auth-button">
        Register
      </button>

      <h2 className="auth-title">Login</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="auth-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="auth-input"
      />
      <button onClick={handleLogin} className="auth-button">
        Login
      </button>
    </div>
  );
};

export default Auth;





