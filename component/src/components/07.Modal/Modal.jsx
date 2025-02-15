import React, { useEffect, useRef, useState } from 'react';
import "./Modal.css"

function Modal() {
  const [showModal , setShowModal] = useState(false);

  const modalRef = useRef(); 

const Toggle = ()=>{
  setShowModal((prev)=>!prev)
}

const handleClose = ()=>{
  setShowModal(false);
}

useEffect (()=>{
  const cb = (e)=>{
    if(!modalRef.current?.contains(e.target))
    {
      handleClose();
    }
  }
  document.addEventListener("click",  cb);

  return ()=> 
    {
      document.removeEventListener("click", cb);
    };
}, [])

  return (
    <>
    <button onClick={Toggle}>Show</button>
    {
    showModal && (
    <div className='container' ref={modalRef}>
      <p>React is one of the most widely used JavaScript libraries for building modern web applications. It provides a fast, scalable, and flexible way to create dynamic user interfaces.React is powerful, efficient, and widely used in modern web development. If you want to build fast, scalable, and user-friendly applications, mastering React is a great choice</p>
      <button onClick={handleClose}>Close</button>
     
    </div>
    )}
  
    </>
  
  
  )
}

export default Modal
