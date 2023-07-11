import React, { useState } from 'react';
import './LoginPage.css';

import SignupPage from './SignupPage';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform registration logic here
    console.log('Email:', email);
    console.log('Password:', password);

    // Clear form fields
    setEmail('');
    setPassword('');
  };

  return (
    
    <div className='whole-page'>
    <div className="signup-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">LOGIN</button>    
       
      </form>
      <div className='text'><p>New to Website ? <a href="signup">Signup</a></p></div>
    </div>
    </div>
    
  );
};

export default LoginPage;
