import React, { useState } from 'react';
import "./Style.css";
import {FaSearch} from "react-icons/fa"


const Search = () => {
  const [text, setText] = useState("");
  const [result , setResult] = useState([]); 

  const handleChange = (e)=>{
    const value = e.target.value;
    setText(value);
    fetchData(value);
  }

  const fetchData = async(value)=>{
    const response = await fetch("https://dummyjson.com/users?limit=100");
    const data = await response.json();
    const result = data.users.filter((user)=>{
      return (
        value && user && user.firstName && user.firstName.toLowerCase().includes(value)
      )
    })
    setResult(result);
    
  }

  return (
    <div className='app'>
      <h1>Search Bar </h1>
      <div className='search-container'>
        <input type = "text" placeholder='Type to Search' value={text} onChange={handleChange}></input>
        <FaSearch id="search-icon" />

      </div>
      <div className='result-list'>
      {
        result.map((item, index)=>{
          return <div key = {item.id} className='item-list' onClick={(e)=>alert(`You clicked ${item.firstName}`)}>{item.firstName}</div>
           
        })
      }
      </div>
      
    </div>
  )
}

export default Search;
