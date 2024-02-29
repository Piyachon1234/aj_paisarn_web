import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', { username, password });
      if (response.status === 200) {
        setMessage('Login successful');
      } else {
        setMessage('Invalid username or password');
      }
    } catch (error) {
      setMessage('Internal server error');
    }
  };
