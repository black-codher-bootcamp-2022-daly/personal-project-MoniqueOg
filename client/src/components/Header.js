import React from "react";

const Heading = (props) => {
    return (
        <nav>
            <div className="logo">
                <h5>Trading<span>Aid</span></h5>
            </div>
            <ul className="menu">
                <li><a href="/">Home</a></li>

                <li><a href="./trading-glossary">Glossary</a></li>

                <li><a href="/charts">Charts</a></li>

                <li><a href="/stocks">Stocks</a></li>

                <li><a href="/articles">Articles</a></li>

                <li><a href="./trading.html" target="_blank" className="tooltip">PaperTrading</a></li>

                <li><a href="/about">About</a></li>
            </ul>
            <div className="bar">
                <div className="bar-1"></div>
                <div className="bar-2"></div>
                <div className="bar-3"></div>
            </div>
        </nav>
    )
};
export default Heading;