import React, { useState } from 'react'

const Display = ({faq}) => {
  const [show , setShow] = useState(false)

  const handleclick = ()=>{
    setShow(!show);
  }

  return (
    <div className='wrapper'>
      <h2>{faq.question}
      <span className='plus' onClick={handleclick}>{show ? "-" :  "+"}</span>
      </h2>
      {show ? <p>{faq.answer}</p> : ""}
      
    </div>
  )
}

export default Display
