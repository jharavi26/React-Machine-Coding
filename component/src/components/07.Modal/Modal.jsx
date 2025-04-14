import React, { useRef, useState , useEffect } from 'react';
import "./Modal.css";

function Modal() {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();

  const handleToggle = ()=>{
    setShowModal(!showModal)
  }

  const handleClose = ()=>{
    setShowModal(false);
  }

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!modalRef.current?.contains(e.target)) {
        setShowModal(false);
      }
    };
  
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };
  
    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("keydown", handleEsc);
  
    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);
  
  return (

    <div className='container'>
      <button onClick={(e)=>{e.stopPropagation(); handleToggle()}}>{showModal ? "Hide" : "Show"} </button>

      {showModal && <div className='modal' ref={modalRef}>
        <p>These JavaScript concepts are essential for a 5-6 LPA frontend developer job because they enable you to build efficient, dynamic, and maintainable applications. In addition, interviewers often test your understanding of these concepts to assess how you handle complex programming tasks and problem-solving challenges.
          <span onClick={handleClose}>Close</span>
        </p>

        </div>}
   
      
    </div>
  )
}

export default Modal
