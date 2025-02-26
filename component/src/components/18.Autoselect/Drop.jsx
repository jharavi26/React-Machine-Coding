import React, { useEffect, useRef, useState } from 'react';

const STATE = {
  LOADING : "LOADING",
  SUCCESS : "SUCCESS",
  ERROR : "ERROR"
}

function Drop() {
  const [query , setQuery] = useState("");
  const [status, setStatus] = useState(STATE.SUCCESS);
  const [result , setResult] = useState([]);
  const cache = useRef({});

  useEffect(()=>{

    if (!query.trim()) { // ✅ Prevent empty API calls
      setResult([]);
      setStatus(STATE.SUCCESS);
      return;
    }

    const abortController = new AbortController();
    const {signal} = abortController;

    const fetchData = async ()=>{
      try{
        setStatus(STATE.LOADING);
        if(cache.current[query]){
          setResult(cache.current[query]);
          setStatus(STATE.SUCCESS);
          return;
        }
          const response = await fetch(`https://dummyjson.com/users/search?q=${query}&limit=100`, {signal});
          const data = await response.json();
          const filterData = data.users.filter((user)=>
          user.firstName.toLowerCase().includes(query.toLowerCase()));

          setStatus(STATE.SUCCESS);
          cache.current[query] = filterData;
          setResult(filterData);
      }catch(error){
        if(error.name !== "AbortError"){
        setStatus(STATE.ERROR)
        }
      }
    };

      const Timer = setTimeout(fetchData , 1000);
      return ()=>{
        clearTimeout(Timer);
      abortController.abort();
      };

  },[query])


  return (
    <div>
      <input type = "text" value={query} placeholder='Enter a userName' onChange={(e)=>setQuery(e.target.value)}></input>
      {status === STATE.LOADING && <div>Loading a Data...</div>}
      {status === STATE.ERROR && <div>Error Occured</div>}
      {
        status === STATE.SUCCESS && (
        <ul>
          {
            result.map((item, id)=>{
              return <li key = {item.id}>{item.firstName}</li>
            })
            
          }
        </ul> )}
      
    </div>
  )
}

export default Drop
