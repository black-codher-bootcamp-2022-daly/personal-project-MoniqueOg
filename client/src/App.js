// SERVICES THAT CALL OUR API ENDPOINTS

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Heading from './components/Header';
import Glossary from './components/Glossary';
import Home from './components/Home';
import Stocks from './components/Stocks';
// import Community from './components/Community';
import './App.css';


function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/trading-glossary" element={
            <>
              <Heading />
              <Glossary></Glossary>
            </>} />
          <Route path="/stocks" element={
            <>
              <Heading />
              <Stocks></Stocks>
            </>} />
          <Route path="/community" element={
            <>
              <Heading />
              {/* <Community></Community> */}
            </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
