// SERVICES THAT CALL OUR API ENDPOINTS

//react client side
//query database for terms in glossary to return to api  instead of hard coding 
//retrieve query get the array of terms and definitions
//mongo.db create a new collection node server query the database db.collections.find
//then react client term api /client /api then to return the terms and definitions
import React, { useState, useEffect } from 'react'
import {setTradingGlossary} from "./services/tradingService";
import './App.css';

function App() {
  const [terms, setTradingGlossary] = useState([])

  useEffect(() => {
    async function getTerms() {
      if (!terms) {
        const response = await setTradingGlossary();
        getTerms(response);
      }
    }

    getTerms();
  }, [terms]);

return (
    <div>
<h1>Trading Glossary</h1>
      {terms.map((term, index) => (
        <div key={index}>
          <h3>{term.term}</h3>
          <p>{term.definition}</p>
        </div>
      ))}
    </div>
  )
  return (
    <div>
      <ul>
        {terms && terms.length > 0 ? (
          terms.map((tradingService) => rendertradingGlossaryModel(TradingGlossary))
        ) : (
          <p>No definitions found</p>
        )}
      </ul>
    </div>
  );
}

export default App;

// const TradingGlossary = () => {
//   const [terms, setTerms] = useState([])

//   useEffect(() => {
//     fetch('/api/trading-glossary')
//       .then(res => res.json())
//       .then(data => setTerms(data))
//       .catch(err => console.log(err))
//   }, [])

//   return (
//     <div>
//       <h1>Trading Glossary</h1>
//       {terms.map((term, index) => (
//         <div key={index}>
//           <h3>{term.term}</h3>
//           <p>{term.definition}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default TradingGlossary;
