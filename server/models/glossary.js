import mongoose from 'mongoose';

const tradingGlossary = {
    "Bid Price": "The highest price a buyer is willing to pay for a particular security or asset.",
    "Ask Price": "The lowest price a seller is willing to accept for a particular security or asset.",
    "Spread": "The difference between the bid price and the ask price of a security or asset.",
    "Market Order": "An order to buy or sell a security or asset at the best available price in the market.",
    "Limit Order": "An order to buy or sell a security or asset at a specified price or better.",
    "Stop Order": "An order to buy or sell a security or asset when its price reaches a specified level.",
    "Position": "The amount of a particular security or asset that a trader holds in their portfolio.",
    "P&L": "Profit and loss, the amount of profit or loss that a trader has realized from a particular trade or their overall portfolio.",
    "Risk Management": "The practice of identifying and managing potential risks associated with trading, such as market risk, credit risk, and operational risk.",
    "Technical Analysis": "The practice of analyzing past market data, such as price and volume, to identify trends and make trading decisions."
  };
  
  console.log(tradingGlossary["Bid Price"]);