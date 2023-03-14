import React from 'react';
import ReactDOM from 'react-dom';
 

const Banner = (props) => { 
    return( 
    <div class="banner">
<div class="wrapper">
  <div class="content">
    <h2>Trade with Confidence:</h2>
    <h3>
      Let Our Trading Aid Guide You to Success!
    </h3>

    <p>
      Trading Guide is a website that provides you with information about the stock market and the cryptocurrencies.
      It also provides you with a trading bot that will help you make the right decisions when trading.
    </p>

    {/* <!--add an api search engine--> */}
    <input type="text" id="search" placeholder="Search for a stock" />
    <button id="search-btn">Search</button>

    <h5 class="socials">
      <i class="fa fa-deckx"></i>
      <i class="fa fa-github" href="https://github.com/MoniqueOg" target="_blank"></i>
      <i class="fa fa-linkedin"></i>
    </h5>
  </div>
</div>
</div>
)};

const Heading = (props) => {
    return (
        <nav>
        <div class="logo">
          <h5>Trading<span>Guide</span></h5>
        </div>
        <ul class="menu">
          <li><a href="#home">Home</a></li>
          <ul>
            <li><a href="./trading-glossary">Glossary</a></li>
          </ul>
          <ul>
            <li><a href="#charts">Market</a></li> <!-- Add charts -->
          </ul>
          <ul>
            <li><a href="#stocks">Stocks</a></li> <!--add stocks here-->
          </ul>
          <li><a href="#community">Community</a></li> <!--add news articles here-->
          <li><a href="./trading.html" target="_blank" class="tooltip">PaperTrading</a></li>
  {/* ask if ul's are needed */}
        </ul>
        <div class="bar">
          <div class="bar-1"></div>
          <div class="bar-2"></div>
          <div class="bar-3"></div>
        </div>
      </nav>
    )
};


export default Banner;