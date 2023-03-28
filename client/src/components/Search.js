import React from 'react';
import { useNavigate } from "react-router-dom";

//connect to external api to render info
//wireframe for search results

const propTypes = {};
const defaultProps = {};

const Search = (props) => {
  const navigate = useNavigate();
  const [term, setTerm] = React.useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/stocks?search=${term}`)
  };

  return (
    <div>
      <form id="searchAPI" onSubmit={handleSubmit}>
        <label>
          <input type="text" placeholder="Enter token or company..." id="search" name="search" value={term} onChange={(e) => setTerm(e.target.value)} />
        </label>
        <button type="submit" id="search-btn" >Search</button>
      </form>

    </div>
  );
}

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;