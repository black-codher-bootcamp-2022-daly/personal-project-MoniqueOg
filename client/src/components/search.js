//search api for stock data from data.json
import React from 'react';
import stockData from '../data.json';
import './index.css';
 
const { company, description, initial_price, price_2007, symbol } = stockData;
const propTypes = {};
const defaultProps = {};

const Search = (props) => {
  const [term, setTerm] = React.useState('');
  const [results, setResults] = React.useState([]);

  const handleSubmit = (event) =>{
    event.preventDefault();
    const filteredData = stockData.filter((item) => item.symbol.toLowerCase().includes(term.toLowerCase()) || item.name.toLowerCase().includes(term.toLowerCase()) || item.exchange.toLowerCase().includes(term.toLowerCase()));
    setResults(filteredData);
  };

  const handleChange = (event) => {
    event.preventDefault()
    console.log(stockData)
  };

  return (
    <div>
      <form id="searchAPI" onSubmit={handleSubmit}>
        <label>
          <input type="text" placeholder="Enter symbol, company name, or exchange..." id="term" name="term" value={term} onChange={(e) => setTerm(e.target.value)}/>
        </label>
        <input type="submit" value="Search"/>
      </form>
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
    </div>
  );
}

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;