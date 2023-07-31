import React from 'react';
import LoginPage from './LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './LoginPage.css';
import Form from './SignupPage';
import './SignupPage.css';
import Home from './Home';
import Payment from './Payment';
import Admission from './Admission';  
import About from './About';
import Placement from './Placement';
import Contact from './Contact';
import Institute from './Institute';
import FeedbackForm from './Feedback';

const App = () => {
  return (
    <BrowserRouter>
    
    <div className="App">
    <Routes>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/" element={<Form/>}></Route>
    <Route path="/Login" element={<LoginPage/>}></Route>
    <Route path="/Payment" element={<Payment/>}></Route>
    <Route path="/Admission" element={<Admission/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Placement" element={<Placement/>}></Route>
    <Route path="/Contact" element={<Contact/>}></Route>
    <Route path="/Institute" element={<Institute/>}></Route>
    <Route path="/feedback" element={<FeedbackForm/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>

  );
};

export default App;