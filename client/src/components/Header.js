import React from "react";

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
                    <li><a href="#charts">Market</a></li>
                </ul>
                <ul>
                    <li><a href="#stocks">Stocks</a></li>
                </ul>
                <li><a href="#community">Community</a></li>
                <li><a href="./trading.html" target="_blank" class="tooltip">PaperTrading</a></li>
            </ul>
            <div class="bar">
                <div class="bar-1"></div>
                <div class="bar-2"></div>
                <div class="bar-3"></div>
            </div>
        </nav>
    )
};
export default Heading;