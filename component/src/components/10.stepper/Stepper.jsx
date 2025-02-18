import React from 'react';
import "./Style.css"

function Stepper() {
  const steps  = [
    {
      name : "Customer Info",
      Component : <div>Contact Info</div>,
  },
  {
    name : "Shipping Info",
    Component : <div>Contact Info</div>,
},
{
  name : "Payment",
  Component : <div>Contact Info</div>,

},
{
  name : "Delivery",
  Component : <div>Contact Info</div>,
}
]
  return (
    <div className='stepper'>
      <div>
          { steps.map((item, index)=>{
            return <div className='stepper-container' key={index}>
              <div className='number'>{index+1}</div>
              <div className='line'></div>
              <div className='item'>{item.name}</div>
              </div>
          })
        }
        </div>
        
 
      
      
    </div>
  )
}

export default Stepper
