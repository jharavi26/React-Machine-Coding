import React, { useState } from 'react';
import "./Modal.css"

function Modal() {
  const [showDialog , setShowDialog] = useState(false);


  const handleShow = ()=>{
    setShowDialog(!showDialog)
  } 

  const handleCloseDialog = ()=>{
    setShowDialog(false)
  }


  return (
    <div className='app'>
      <div>
      <button onClick={handleShow}>Show</button>
      {showDialog && 
      <div className='container'>
        <p>This is Modal Container
          <span className='close'>x</span>
        </p>
        </div>}
      </div>
    </div>
  )
}

export default Modal
