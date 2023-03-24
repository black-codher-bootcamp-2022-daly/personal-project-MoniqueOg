import { React, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import stockData from '../data.json';


function Stocks() {
    const [searchParams] = useSearchParams();
    const [results, setResults] = useState([]);

    useEffect(() => {
        const term = searchParams.get('search');
        const filteredData = stockData.filter((item) => item.symbol.toLowerCase().includes(term.toLowerCase()) || item.company.toLowerCase().includes(term.toLowerCase()));
        setResults(filteredData);
    }, [searchParams]);

    return (<div className='results'>
        {results.length > 0 ?
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