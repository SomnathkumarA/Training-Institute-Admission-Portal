import React, { useState } from 'react';
import './LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Cookies from 'js-cookie';
import TextField from '@mui/material/TextField';


const LoginPage = () => {
  const[user,setUser]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

   

  const login = async () => {
    try {
     
      Cookies.set('Id', user);

      navigate('/home');
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="whole-page">
      <div className="signup-container">
        <h2>Login</h2>
        <form>
        <div className="form-group">
        <label >User Name:</label>
        <input 
        
          type="text"
       
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
        </div>
          <div className="form-group">
            <label >Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>


          <Button variant="contained" style={{ marginLeft: '100px' }} onClick={login}>
            Login
          </Button>

          

        </form>
        <div className="text">
          New to Website ? <Link to="/">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;