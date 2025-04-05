import React, { useEffect, useRef, useState } from 'react';
import "./Otp.css";

const DIGIT =6;

function OTP() {
  const [inputArr , setInputArr] = useState([...Array(DIGIT).fill("")]);
  const inputRef = useRef([])

  useEffect(()=>{
    inputRef.current[0]?.focus();
  },[])

  const handleChange = (value, index)=>{
    if(isNaN(value)) return;
    console.log(value);
    const newValue = value.trim("")
    const newInput = [...inputArr];
    newInput[index] = newValue.slice(-1);
    setInputArr(newInput);

   if(newValue && index < DIGIT-1 && inputRef.current[index]){
    inputRef.current[index+1].focus();
   }
   
  }

  const handleKeyDown = (e, index)=>{
    console.log(e.key);
    if(!e.target.value && e.key === "Backspace" && index > 0){
      inputRef.current[index-1].focus();
    }
    else if (e.key === "ArrowRight" && index < DIGIT - 1) {
      inputRef.current[index + 1]?.focus();
    }
  
    else if(e.key === "ArrowLeft" && index > 0) {
      inputRef.current[index - 1]?.focus();
    }
  }

  return (
    <div className='container'>
      <h1>OTP Component</h1>
    {
      inputArr.map((input, index)=>{
        return <input type = "text" value={inputArr[index]} onChange={(e)=>handleChange(e.target.value, index)} key={index}
        ref = {(input)=>inputRef.current[index] = input} onKeyDown={(e)=>handleKeyDown(e, index)}
        ></input>
      })
    }
      
    </div>
  )
}

export default OTP;

