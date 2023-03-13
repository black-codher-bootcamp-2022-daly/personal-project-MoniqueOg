import React, { useState, useEffect } from 'react'
//react client side
//query database for terms in glossary to return to api  instead of hard coding 
//retrieve query get the array of terms and definitions
//mongo.db create a new collection node server query the database db.collections.find
//then react client term api /client /api then to return the terms and definitions
const TradingGlossary = () => {
  const [terms, setTerms] = useState([])

  useEffect(() => {
    fetch('/api/trading-glossary')
      .then(res => res.json())
      .then(data => setTerms(data))
      .catch(err => console.log(err))
  }, [])

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
}

export default TradingGlossary