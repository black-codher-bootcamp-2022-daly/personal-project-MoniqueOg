import React from 'react';
import stockData from '../data.json';
// import Search from './Search';


//utilise useEffect

function Stocks() {
    const [term] = React.useState('');
    const [results, setResults] = React.useState(stockData);
    const filteredData = stockData;//.filter((item) => item.symbol.toLowerCase().includes(term.toLowerCase()) || item.name.toLowerCase().includes(term.toLowerCase()) || item.exchange.toLowerCase().includes(term.toLowerCase()));
    // setResults(filteredData);
  
    return (<div className='results'>
        { results.length > 0 ?
            <ul>
                {results.map((item) => (
                    <li key={item.symbol}>
                        <h2>{item.company}</h2>
                        <p>{item.description}</p>
                        <p>{item.initial_price}</p>
                        <p>{item.price_2007}</p>
                    </li>
                ))}
            </ul>
            : <h2>No Results Found</h2>}
 </div>);
};

export default Stocks;