import React from 'react';
import "./Card.css"

function Card() {
  return (
    <div className='container'>
      <img src = "https://picsum.photos/300/200" alt="images" className='card-image'/> 
      <h1 className='card-title'>Card Title</h1>
      <p className='card-description'>This is a card Details. You can find more information</p>
      <a href='cardPage'>Learn More</a>
      
    </div>
  )
}

export default Card
