import React, { useRef, useState } from 'react';
import "./Toast.css"

function Toast() {
  const [toast, setToast] = useState([])
  const timref =useRef({})

  const handleClose = (id)=>{
    clearTimeout(timref.current[id]);
    delete timref.current[id];
    setToast((prevToast)=>{
      const filterToast = prevToast.filter((toast)=>{
        return toast.id !==id;
      });
      return filterToast;
    }) 
  }

  const handleAdd = (message, type)=>{
    const id = new Date().getTime();
    const newToast = [...toast, {id , message , type}];
    timref.current[id] = setToast(newToast);
    setTimeout(() => {
      handleClose(id);
    }, 3000);
  }

  return (
    <div className='container'>
      <div className='toast-container'>
        {
        toast.map(({id, message, type})=>{
          return (
          <div className={`toast ${type}`} key={id}>{message}<span onClick={()=>handleClose(id)}>x</span>
          </div>
          );
        })
      }
       
      </div>
      <div className='wrapper'>
        <button onClick={()=>handleAdd("Success" , "success")}>Success Toast</button>
        <button onClick={()=>handleAdd("Info" , "info")}>Info Toast</button>
        <button onClick={()=>handleAdd("Warning" , "warning")}>Warning Toast</button>
        <button onClick={()=>handleAdd("Error" , "error")}>Error Toast</button>
      </div>
      
    </div>
  )
}

export default Toast
