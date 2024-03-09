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

  return (
    <div className="login-container">
      <h1 className="topic">Sign in</h1>
      <form onSubmit={handleLogin}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Your username" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
        <input type="submit" value="Next" />
      </form>
      <div className="footer">
        Don't have an account? <a href="signup.html">Create account</a>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;