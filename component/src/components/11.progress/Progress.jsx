import React, { useEffect, useState } from 'react';
import "./Style.css"


function Progress() {
  const [value, setValue] = useState(0);
  const [percentage , setPercentage] = useState(value)

  useEffect(()=>{
    setPercentage(Math.min(100 , Math.max(value, 0)))
  },[value])

  useEffect(()=>{
    const id = setInterval(() => {
      setValue((prev)=>prev + 1) 
    }, 100);

    return ()=>clearInterval(id);
  },[])

  return (
    <div>
      <h1>Progress Bar</h1>
      <div className='container'>
        <span style={{color : percentage > 49 ?  "white" : "Black"}}>{percentage.toFixed()}%</span>
        <div style={{width : `${percentage}%`}}/>
        </div>
      
    </div>
  )
}

export default Progress
