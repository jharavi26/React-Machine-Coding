import React, { useState } from 'react';
import "./Rating.css";
import StarIcon from './StarIcon';


const VALUE = 5;

const Rating = ({value =0, star = VALUE}) => {

  const [clickIndex , setClickIndex] = useState(value-1);
  const [hoverIndex , setHoverIndex] = useState(-1);


const handleClick = (id)=>{
  return ()=>{
    setClickIndex(id)
    onChange(id+1)
  };
}

const handleMouseEnter = (id)=>{
  return ()=>{
    setHoverIndex(id)
  }
}

const handleMouseLeave = ()=>{
  setHoverIndex(hoverIndex-1)
}

  return (
    <div>
      <h1>Rating Component</h1>
      <div className='star-rating'>
      {
        [...Array(star)].map((_, index)=>{
          return <button className= {`${index <= clickIndex ? 'active' : ""} ${index <= hoverIndex && hoverIndex !==-1 ? "hover" : ""}`}
           onClick={handleClick(index)} key = {index}
           onMouseEnter={handleMouseEnter(index)} 
           onMouseLeave={handleMouseLeave}>
             <StarIcon size = "50"  key = {index}  />
            </button>
 
        })
      }
      </div>
      
    </div>
  )
}

export default Rating
