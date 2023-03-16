import React from 'react';


const Banner = (props) => {
  return (
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
  )
};



export default Banner;