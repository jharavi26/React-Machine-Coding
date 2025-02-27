import React, { useEffect, useState } from 'react';
import "./style.css";

function Multi() {
  const [searchItem , setSearchItem ] = useState("");
  const [suggestion, setSuggestion ] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        if(searchItem.trim() === ""){
          setSuggestion([]);
          return;
        }
      const response = await fetch(`https://dummyjson.com/users/search?q=${searchItem}`);
      const data = await response.json();
      setSuggestion(data.users);
      }
      catch(error){
        console.log(error);
      }
    }

    fetchData();
  },[searchItem])


   return (
    <div className='search-container'>
      <div className='search-input'>

      <div>
      <input value = {searchItem} placeholder='Search username' onChange={(e)=>setSearchItem(e.target.value)}></input>
      <div className='suggestion-list'>

        {
          suggestion.map((item, index)=>{
            return <li key ={index}>
              <img src = {item.image} alt = {`${item.firstName} - ${item.lastName}`} />
              <span>{item.firstName} {item.lastName}</span>
            </li>

          })
        }
      </div>
      
    </div>
    </div>
    </div>
  )
}

export default Multi
