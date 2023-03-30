import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import stockData from '../data.json';
import apiData from '../api.json';

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

            const updatedData = filteredData.map((item) => {
                const apiItem = apiData.data.find((data) => {
                    console.log(data.symbol, item.symbol);
                    return data.symbol === item.symbol
                }); console.log(apiItem);
                const latestPrice = apiItem ? apiItem.close : '';
                return { ...item, latestPrice };
            });

            setResults(updatedData);
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
                        <h2>
                            {item.company} | {item.symbol}
                        </h2>
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
