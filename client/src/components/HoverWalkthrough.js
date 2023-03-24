import React, { useState } from 'react';

export default function HoverWalkthrough({ steps }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentStep = steps[currentStepIndex];

  const handleMouseEnter = () => {
    setCurrentStepIndex(currentStepIndex + 1);
  };

  const handleMouseLeave = () => {
    setCurrentStepIndex(0);
  };

  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ display: currentStep ? 'block' : 'none', position: 'absolute', ...currentStep?.style }}>
        {currentStep?.content}
      </div>
      {currentStep?.target}
    </div>
  );
}
