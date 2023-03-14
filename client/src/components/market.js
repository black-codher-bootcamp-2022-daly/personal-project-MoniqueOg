import axios from 'axios';

const accessKey = {
  access_key: '020ab735be63a5d61efa0bbab65e292c'
}

axios.get('https://api.marketstack.com/v1/tickers/aapl/eod', {accessKey})
  .then(response => {
    const apiResponse = response.data;
    if (Array.isArray(apiResponse['data'])) {
        apiResponse['data'].forEach(stockData => {
              console.log(`Ticker ${stockData['symbol']}`,
                  `has a day high of ${stockData['high']},
                  'and a day low of ${stockData['low']}`,
                  `on ${stockData['date']}`);
        });
    }
  }).catch(error => {
    console.log(error);
  });

 
export {accessKey};