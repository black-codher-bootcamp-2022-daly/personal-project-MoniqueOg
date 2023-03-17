import React, { useState, useEffect } from 'react'
import { setTradingGlossary } from "../services/tradingService";
import Wrapper from '../components/Wrapper';
import Content from '../components/Content1';
import Heading from '../components/Header';
import Glossary from './Glossary';
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
        <Glossary></Glossary>
        </div>
    );
}
export default Home;