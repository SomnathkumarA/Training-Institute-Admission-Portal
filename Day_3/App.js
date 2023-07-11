import React from 'react';
import LoginPage from './LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './LoginPage.css';
import SignupPage from './SignupPage';
import './SignupPage.css';

const App = () => {
  return (
    <BrowserRouter>
    
    <div className="App">
    <Routes>
    <Route path="/" element={<LoginPage/>}></Route>
    <Route path="/Signup" element={<SignupPage/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>

  );
};

export default App;
