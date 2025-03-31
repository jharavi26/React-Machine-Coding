import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import "./Rating.css"

function App() {
  const value = 5; 
  const [clickIndex, setClickIndex] = useState(-1);
  const [hoverIndex, setHoverIndex] = useState(-1);

  const handleClick = (id) => {
    setClickIndex(id);
  }

  const handleMouseEnter = (index) => {          //write way to do
    setHoverIndex(index);
  }
    
  const handleMouseLeave = () => {
    setHoverIndex(-1);
  }

  return (
    <div>
      {
        [...Array(value)].map((item, index) => {
          return (
            <FaStar 
              size={50} 
              key={index} 
              onClick={() => handleClick(index)} 
              className={`${index <= clickIndex ? "active" : ""} ${index <= hoverIndex && hoverIndex !== -1 ? "hover" : ""}`}
              onMouseEnter={() => handleMouseEnter(index)} 
              onMouseLeave={handleMouseLeave}
            />
          )
        })
      }
    </div>
  );
}

export default App;
