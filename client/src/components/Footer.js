import React, { useEffect } from 'react';

function Footer() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: 'FOREXCOM:SPXUSD',
          title: 'S&P 500',
        },
        {
          proName: 'FOREXCOM:NSXUSD',
          title: 'US 100',
        },
        {
          proName: 'FX_IDC:EURUSD',
          title: 'EUR/USD',
        },
        {
          proName: 'BITSTAMP:BTCUSD',
          title: 'Bitcoin',
        },
        {
          proName: 'BITSTAMP:ETHUSD',
          title: 'Ethereum',
        },
      ],
      showSymbolLogo: true,
      colorTheme: 'dark',
      isTransparent: false,
      displayMode: 'adaptive',
      locale: 'en',
    });
    const parent = document.getElementsByClassName('tradingview-widget-container status-bar')[0];
    parent.appendChild(script);
    return () => {
      parent.removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container status-bar">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/markets/" rel="noopener noreferrer" target="_blank">
          <span className="blue-text">Markets today</span>
        </a> by TradingAid
      </div>
    </div>
  ); 
}


export default Footer;

