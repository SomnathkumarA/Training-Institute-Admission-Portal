import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/courses">Courses</Link>
          </li>
          <li className="navbar-item">
            <Link to="/trainers">Trainers</Link>
          </li>
          <li className="navbar-item">
            <Link to="/payment">Payment</Link>
          </li>
          <li className="navbar-item">
            <Link to="/feedback">Feedback</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <h1>Welcome to the Training Institute Admission Portal</h1>
        <p>Explore our courses, trainers, and make secure payments.</p>
      </div>
    </div>
  );
};

export default Home;
