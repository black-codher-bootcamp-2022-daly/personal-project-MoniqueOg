import React from 'react';
import data from '../data.json';
// import './App.css';
 
//connect to external api to render info
//wireframe for search results
//new page for glossary + search results 
const propTypes = {};
const defaultProps = {};

const Search = (props) => {
  const [term, setTerm] = React.useState('');
  const [results, setResults] = React.useState([]);
  console.log(data);
  // const handleSubmit = (event) =>{
  //   event.preventDefault();
  //   const filteredData = stockData.filter((item) => item.symbol.toLowerCase().includes(term.toLowerCase()) || item.name.toLowerCase().includes(term.toLowerCase()) || item.exchange.toLowerCase().includes(term.toLowerCase()));
  //   setResults(filteredData);
  // };

  // return (
  //   <div>
  //     <form id="searchAPI" onSubmit={handleSubmit}>
  //       <label>
  //         <input type="text" placeholder="Enter symbol, company name, or exchange..." id="term" name="term" value={term} onChange={(e) => setTerm(e.target.value)}/>
  //       </label>
  //       <input type="submit" value="Search"/>
  //     </form>
  //     {results.length > 0 ?
  //       <ul>
  //         {results.map((item) => (
  //           <li key={item.symbol}>
  //             <h2>{item.company}</h2>
  //             <p>{item.description}</p>
  //             <p>{item.initial_price}</p>
  //             <p>{item.price_2007}</p>
  //           </li>
  //         ))}
  //       </ul>
  //       : <h2>No Results Found</h2>}
  //   </div>
  // );
}

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;