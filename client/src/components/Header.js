import React from "react";

const Heading = (props) => {
    return (
        <nav>
            <div className="logo">
                <h5>Trading<span>Guide</span></h5>
            </div>
            <ul className="menu">
                <li><a href="#home">Home</a></li>
                <ul>
                    <li><a href="./trading-glossary">Glossary</a></li>
                </ul>
                <ul>
                    <li><a href="#charts">Market</a></li>
                </ul>
                <ul>
                    <li><a href="#stocks">Stocks</a></li>
                </ul>
                <li><a href="#community">Community</a></li>
                <li><a href="./trading.html" target="_blank" class="tooltip">PaperTrading</a></li>
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