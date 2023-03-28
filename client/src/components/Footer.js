import React from 'react';

function Footer() {
  return (
    <div className="tradingview-widget-container status-bar">
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/markets/" rel="noopener noreferrer" target="_blank"><span className="blue-text">Markets today</span></a> by TradingAid</div>
        <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
          {`{
      "symbols": [
        {
          "proName": "FOREXCOM:SPXUSD",
          "title": "S&P 500"
        },
        {
          "proName": "FOREXCOM:NSXUSD",
          "title": "US 100"
        },
        {
          "proName": "FX_IDC:EURUSD",
          "title": "EUR/USD"
        },
        {
          "proName": "BITSTAMP:BTCUSD",
          "title": "Bitcoin"
        },
        {
          "proName": "BITSTAMP:ETHUSD",
          "title": "Ethereum"
        }
      ],
      "showSymbolLogo": true,
      "colorTheme": "dark",
      "isTransparent": false,
      "displayMode": "adaptive",
      "locale": "en"
    }`}
        </script>
      </div>
  );
}

export default Footer;

