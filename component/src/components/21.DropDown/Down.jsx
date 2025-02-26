import React, { useState } from 'react'

function Down() {
  const [value , setValue] = useState("");
  

  const handleChange = (e)=>{
    setValue(e.target.value)
  }


  return (
    <div>
      <label htmlFor="Sprots" id="event">Choose a Sports:
      <select onChange={handleChange} value = {value}>
        <option>Select</option>
        <option value ="cricket">Cricket</option>
        <option value = "Hockey">Hockey</option>
        <option value= "Football">Football</option>
        <option value ="Tennis">Tennis</option>
        <option value = "Shooting">Shooting</option>
        <option value = "Swimming">Swimming</option>
      </select>
      </label>
      { value && 

      <p>Favourite Sports is :{value}</p>
}
      
    </div>
  )
}

export default Down
