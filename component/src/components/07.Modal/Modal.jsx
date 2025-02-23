import React, { useEffect, useRef, useState } from 'react';
import "./Modal.css"

function Modal() {
  const [showDialog , setShowDialog] = useState(false);
  const contentRef = useRef();
  const backDropRef = useRef();


  const handleShow = ()=>{
    setShowDialog(true)
  } 

  const handleCloseDialog = ()=>{
    setShowDialog(false)
  }

  function handleClose() {
    backDropRef.current.classList.add("hide");
    contentRef.current.classList.add("hide");
  
    contentRef.current.addEventListener("animationend", handleAnimationEnd, {
      once: true,
    });
  }

  useEffect(()=>{
 
    document.addEventListener("keyup" , handleKeyUp);

    return ()=> document.removeEventListener("keyup" , handleKeyUp)
  },[])


  function handleAnimationEnd(){
    handleCloseDialog();
   }

  function handleKeyUp(e){
    if(e.key === "Backspace"){
      handleClose();
    }
  }
  


  return (
    <div className='app'>
      <div>
      <button onClick={handleShow}>Show</button>
      {showDialog &&  
      <>
      <div className='backdrop' ref={backDropRef} onClick={handleClose}/>
      <div className='container' ref={contentRef}>
        <p>A modal container is a user interface element that displays content in an overlay, typically appearing on top of the main page. It is commonly used for pop-ups, forms, alerts, or additional information without navigating away from the current view. A modal enhances user experience by focusing attention on specific tasks while keeping the background content accessible but inactive.
          <button className='close' onClick={handleClose}>&times;</button>
        </p>
        </div>
        </>
        }
      </div>
    </div>
  )
}

export default Modal
