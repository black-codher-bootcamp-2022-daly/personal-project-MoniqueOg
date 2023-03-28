import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import stockData from '../data.json';

function Stocks() {
    const location = useLocation();
    const [results, setResults] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const term = searchParams.get('search');
        if (term != null) {
            const filteredData = stockData.filter((item) =>
                item.company.toLowerCase().includes(term.toLowerCase())
            );          
            //collect symbols from filtered data utilizing a map ending up with an array of strings
            //make a request to the market stack api(retrieving data from api)
            //merge live data with filtered data
            const symbols = filteredData.map((item) => item.symbol);
            const symbolString = symbols.join(','); console.log(symbolString);
            const url = `http://api.marketstack.com/v1/eod?access_key=d92d6bf719499bc80eff87d14dd277f8&symbols=${symbolString}`;
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    const updatedData = filteredData.map((item) => {
                        const latestPrice = data.data.find((stock) => stock.symbol === item.symbol).close;
                        return { ...item, latestPrice };
                    });
                    setResults(updatedData);
                });
        } else {
            setResults(stockData);     
        }
    }, [location.search]);

    return (
        <div>
            <h1>Search Results</h1>
            <ul style={{ padding: '50px' }}>
                {results.map((item) => (
                    <li key={item.symbol}>
                        <h2>{item.company}   |   {item.symbol} </h2>
                        <p>Latest Price: {item.latestPrice}</p>
                        <p>{item.description}</p>
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Stocks;
