import React from 'react';
import Search from './Search.js';
import Accessibility from './Accessability';

const Content = (props) => {
    return (
        <div className="content">
            <h2>Trade with Confidence:</h2>
            <h3>
                Let Our Trading Aid Guide You to Success!
            </h3>

            <p>
                Trading Aid is a site that provides you with information about the stock market data and definitions .
                It also provides you with a trading bot that will help you make the right decisions when trading.
            </p>
            <br />
            <Search></Search>
            <a href='https://github.com/MoniqueOg' target="_blank" rel="noreferrer"><i class="fa-brands fa-github-alt fa-2xl"></i></a>
            <a href='https://www.linkedin.com/in/monique-o-7538b41b8/' target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in fa-2xl"></i></a>
            <br />
            <p>Monique Ogunkeyede | Blackcodher Student</p>
            <br />
            <Accessibility></Accessibility>
        </div>)
};

export default Content;