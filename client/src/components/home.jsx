import React, { useState, useEffect } from 'react'
import { setTradingGlossary } from "../services/tradingService";
import Wrapper from '../components/Wrapper';
import Content from '../components/Content1';
import Heading from '../components/Header';
import '../App.css'

const Home = () => {
    const [terms, setTerms] = useState(null)

  useEffect(() => {
    async function getTerms() {
      if (!terms) {
        const response = await setTradingGlossary();

        setTerms(response);
      }
    }

    getTerms();
  }, [terms]);

    return (
        <div>
        <Heading></Heading>
        <Wrapper> 
          <Content> </Content>
        </Wrapper>
        
          <h1>Trading Glossary</h1>
          {terms && terms.length > 0 ? (terms.map((term, index) => (
            <div key={index}>
              <h3>{term.term}</h3>
              <p>{term.definition}</p>
            </div>
          ))) : (
            <p>No terms found</p>
          )}
        </div>
    );
}
export default Home;