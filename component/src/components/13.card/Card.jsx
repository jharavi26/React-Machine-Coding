import React, { useState } from 'react';
import "./Card.css"

function Card() {
  const [isOn ,  setIsOn] = useState(false);
  
  const handleToggle = ()=>{
    setIsOn(!isOn)
  }
  return (
    <div className='container'>
     <label> 
      <input type='checkbox' checked = {isOn} onChange={handleToggle}></input>
      <span className='slider'></span>
      <span className='labelitem'>React</span>
     </label>
     
    </div>
  )
}

export default Card
