import React, { useRef, useState } from 'react'

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const timeRef = useRef(null);

  const start = ()=>{
    if(timeRef.current) return;
     timeRef.current = setInterval(()=>{
      setTime((val)=>val+1)
    },100)
  }

  const stop = ()=>{
    clearInterval(timeRef.current);
    timeRef.current = null;
  }

  const reset = ()=>{
    clearInterval(timeRef.current);
    timeRef.current = null;
    setTime(0)

  }

  return (
    <div>
      <h1>Countdown Timer</h1>
      <button onClick={start}>Start</button>
      <button onClick={reset}>Reset</button>
      <button onClick={stop}>Stop</button>
      <br/>

      <span>Mins : {Math.trunc(time / 60) }</span> <span>Sec : {time%60}</span>
      <br/>
     
    </div>
  )
}

export default Stopwatch