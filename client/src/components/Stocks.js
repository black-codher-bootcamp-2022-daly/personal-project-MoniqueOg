import { React, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import stockData from '../data.json';


function Stocks() {
    const [searchParams] = useSearchParams();
    const [results, setResults] = useState([]);

    useEffect(() => {
        const term = searchParams.get('search');
        if (term != null) {
          console.log(term);
          const filteredData = stockData.filter((item) => item.company.toLowerCase().includes(term.toLowerCase()));
          setResults(filteredData);
          console.log(filteredData);
        } else {
          setResults(stockData);
        }
      }, [searchParams]);


    return (
        <div>
            <h1>Search Results</h1>
            <ul>
                {results.map((item) => (
                    <li key={item.symbol}>
                        <h2>{item.company}</h2>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Stocks;