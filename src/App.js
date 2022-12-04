import React from 'react';
import './App.css';
// import Axios from "axios"
// import {useState, useEffect }from "react";
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Menu } from './pages/Menu';
import { Navbar } from './pages/Navbar';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import {Text} from "./Utils"


const App = () => {
  
  return (<div className='App'>
          <Router>
            <Navbar />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
          </Router>
          </div>
          )
  };

export default App