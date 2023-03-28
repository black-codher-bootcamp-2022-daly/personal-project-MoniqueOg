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
            {/*add socials here*/}
            <br />
            <p>Monique Ogunkeyede | Blackcodher Student</p>
            <br />
            <Accessibility></Accessibility>
        </div>)
};

export default Content;