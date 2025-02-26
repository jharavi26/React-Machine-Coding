import React, { useEffect, useState } from 'react'

function Multi() {
  const [searchItem , setSearchItem ] = useState("");
  const [suggestion, setSuggestion ] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
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
    <div>
      
    </div>
  )
}

export default Multi
