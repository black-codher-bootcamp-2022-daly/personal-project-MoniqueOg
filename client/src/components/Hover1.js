import React from 'react';
import HoverWalkthrough from './HoverWalkthrough';

export default function App() {
  const steps = [
    {
      target: <button>Button 1</button>,
      content: 'This is button 1',
      style: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'white',
        padding: '10px',
        border: '1px solid black',
      },
    },
    {
      target: <button>Button 2</button>,
      content: 'This is button 2',
      style: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'white',
        padding: '10px',
        border: '1px solid black',
      },
    },
  ];

  return (
    <div>
      <HoverWalkthrough steps={steps} />
      <button>Button 1</button>
      <button>Button 2</button>
    </div>
  );
}