import React from 'react';


const Wrapper = ({ children }) => {
  return (
    <div className="banner">
      <div className="wrapper">
        {children}
      </div>
    </div>
  )
};



export default Wrapper;