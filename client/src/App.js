import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Heading from './components/Header';
import Glossary from './components/Glossary';
import Home from './components/Home';
import TradingViewWidget from './components/Chart';
import Articles from './components/Articles';
import Stocks from './components/Stocks';
import About from './components/About';
import Accessibility from './components/Accessability';

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
              <Accessibility></Accessibility>
              <Glossary></Glossary>

            </>} />
          <Route path="/charts" element={
            <>
              <Heading /><div style={{ height: "650px" }}>
                <TradingViewWidget></TradingViewWidget>
              </div>
            </>} />
            <Route path="/stocks" element={
            <>
              <Heading />
               <Stocks></Stocks> 
              <Accessibility></Accessibility>
            </>} />
          <Route path="/articles" element={
            <>
              <Heading />
              <Accessibility></Accessibility>
              <Articles></Articles>

            </>} />
            <Route path="/about" element={
            <>
              <Heading />
              <Accessibility></Accessibility>
              <About></About>

            </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
