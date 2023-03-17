import React from 'react';


const Wrapper = ({ children }) => {
  return (
    <div class="banner">
      <div class="wrapper">
        {children}
      </div>
    </div>
  )
};



export default Wrapper;