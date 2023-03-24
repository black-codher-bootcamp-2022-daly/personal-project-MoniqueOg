import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Heading from './components/Header';
import Glossary from './components/Glossary';
import Home from './components/Home';
import Stocks from './components/Stocks';
import TradingViewWidget from './components/Chart';
import Articles from './components/Articles';
import Accessibility from './components/Accessability';
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
              <Accessibility></Accessibility>
            </>} />
            <Route path="/charts" element={
            <>
              <Heading />
              <TradingViewWidget></TradingViewWidget>
            </>} />
          <Route path="/stocks" element={
            <>
              <Heading />
              <Stocks></Stocks>
            </>} />
          <Route path="/articles" element={
            <>
              <Heading />
              <Articles></Articles>
              <Accessibility></Accessibility>
            </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
