import React from 'react';
import ReactDOM from 'react-dom';

const tradingGlossary = (props) => {
    return (
        <div className="header">
            <h1>About</h1>
            <div className="Nav">
                <Link to="/"> Home </Link> |
                <Link to="/glossary"> Glossary </Link> |
                {/* <Link to="/volume" className="volumeLink"> Volume ({props.volumeLength})</Link> */}
            </div>
            <div className="page">Welcome to your Trading Aid Glossary.
                <br />
                <h2>Trading Glossary</h2>
                <br />
                <p>
                    Bid Price: The highest price a buyer is willing to pay for a particular security or asset.
                    <br />
                    Ask Price: The lowest price a seller is willing to accept for a particular security or asset.
                    <br />
                    Spread: The difference between the bid price and the ask price of a security or asset.
                    <br />
                    Market Order: An order to buy or sell a security or asset at the best available price in the market.
                    <br />
                    Limit Order: An order to buy or sell a security or asset at a specified price or better.
                    <br />
                    Stop Order: An order to buy or sell a security or asset when its price reaches a specified level.
                    <br />
                    Position: The amount of a particular security or asset that a trader holds in their portfolio.
                    <br />
                    P&L: Profit and loss, the amount of profit or loss that a trader has realized from a particular trade or their overall portfolio.
                    <br />
                    Risk Management: The practice of identifying and managing potential risks associated with trading, such as market risk, credit risk, and operational risk.
                    <br />
                    Technical Analysis: The practice of analyzing past market data, such as price and volume, to identify trends and make trading decisions.
                </p>
            </div>
        </div>
    )
};


export default tradingGlossary;