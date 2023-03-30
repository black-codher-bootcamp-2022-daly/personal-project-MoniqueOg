import React, { useState, useEffect } from 'react';
import { setTradingGlossary } from "../services/tradingService";


const Glossary = () => {
  const [terms, setTerms] = useState(null);
  const [showChatBox, setShowChatBox] = useState(false);
  const [newTerm, setNewTerm] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleNewTermSubmit = async () => {
    const newTermData = {
      term: newTerm,
      definition: newDescription
    };
    await setTradingGlossary(newTermData);
    setTerms(updatedTerms => [...updatedTerms, newTermData]);
    setShowChatBox(false);
    setNewTerm('');
    setNewDescription('');
  };

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
      <h1>Trading Glossary</h1>
      <button  id="accessibility-btn" onClick={() => setShowChatBox(true)}>Add New Term</button>
      {showChatBox && (
        <div className="glossary-modal">
          <div className="glossary-modal-content">
            <span className="glossary-modal-close" onClick={() => setShowChatBox(false)}>&times;</span>
            <input className="glossary-modal-input" style={{color:"black"}} type="text" value={newTerm} onChange={(e) => setNewTerm(e.target.value)} placeholder="Enter Term" />
            <textarea className="glossary-modal-input" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder="Enter Definition"></textarea>
            <button className="glossary-modal-button" onClick={handleNewTermSubmit}>Add Term</button>
          </div>
        </div>
      )}
      {terms && terms.length > 0 ? (
        terms.map((term, index) => (
          <div key={index} style={{ padding: "10px" }}>
            <h3>{term.term}</h3>
            <p>{term.definition}</p>
          </div>
        ))
      ) : (
        <p>No terms found</p>
      )}
    </div>
  );
};

export default Glossary;
