import React, { useEffect, useRef, useState } from 'react';

export default function TradingViewWidget() {
  const [tvScriptLoadingPromise, setTvScriptLoadingPromise] = useState(null);
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      const promise = new Promise((resolve) => {
        const script = document.createElement('script');
        script.id = 'tradingview-widget-loading-script';
        script.src = 'https://s3.tradingview.com/tv.js';
        script.type = 'text/javascript';
        script.onload = resolve;

        document.head.appendChild(script);
      });

      setTvScriptLoadingPromise(promise);
    }

    tvScriptLoadingPromise?.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (document.getElementById('technical-analysis-chart-demo') && 'TradingView' in window) {
        new window.TradingView.widget({
          container_id: 'technical-analysis-chart-demo',
          width: '100%',
          height: '100%',
          autosize: true,
          symbol: 'AAPL',
          interval: 'D',
          timezone: 'exchange',
          theme: 'light',
          style: '1',
          toolbar_bg: '#f1f3f6',
          withdateranges: true,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          save_image: false,
          studies: ['ROC@tv-basicstudies', 'StochasticRSI@tv-basicstudies', 'MASimple@tv-basicstudies'],
          show_popup_button: true,
          popup_width: '1000',
          popup_height: '650',
          locale: 'en',
        });
      }
    }
  }, [tvScriptLoadingPromise]);

  return (
    <div className="tradingview-widget-container" style={{height: "1000px"}}>
      <div id="technical-analysis-chart-demo" />
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/symbols/AAPL/" rel="noopener noreferrer" target="_blank">
          <span className="blue-text">AAPL stock chart</span>
        </a>
        by TradingAid
      </div>
    </div>
  );
};