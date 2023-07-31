import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Cookies from 'js-cookie';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Institute from './Institute';

const Home = () => {
  // const abc=Cookies.get('Id');
  // console.log(abc);
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
        <li className="navbar-item">
        
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/courses">Course info</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Admission">Admission form</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Payment">Payment</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Login">Login</Link>
          </li>
          <li className="navbar-item">
            <Link to="/">Register/Signup</Link>
          </li>
          <li className="navbar-item">
            <Link to="/feedback">Feedback</Link>
          </li>
          
          
        </ul>
      </nav>
      
      <div className="content">
        <h1>Welcome to the Training Institute Admission Portal</h1>
        <p>Explore our courses, trainers, and make secure payments.</p>
      </div>
      <div>
      <nav className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <Link to="/Institute">Institute Info</Link>
          </li>
          <li className="sidebar-item" >
            <Link to="/placement">Placement</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/admission-status">Admission Status</Link>
          </li>
          <li className="sidebar-item">
            <a href='https://meet.google.com/'>Online Interviews</a>
          </li>
          <li className="sidebar-item">
            <Link to="/About">About</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/Login">Logout</Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <h3>Copyrights@</h3>
        
      </div>
      </div>
    </div>
    
  );
};

export default Home;