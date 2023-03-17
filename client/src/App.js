// SERVICES THAT CALL OUR API ENDPOINTS

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import './App.css';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
      </Routes>
    </BrowserRouter>
    )
};

export default App;
