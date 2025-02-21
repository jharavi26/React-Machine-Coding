import React, { useState } from 'react';
import "./Like.CSS";
import { FaRegHeart } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";

function Like() {
  const[liked, setLiked] = useState(false);
  const [fetching , setFetching ] = useState(false);
  const [error , setError] = useState(null);

  const handleLike = async ()=>{
    setFetching(true);
    setError(null);

    try{

    const response = await fetch ("https://www.greatfrontend.com/api/questions/like-button",{
      method : "POST",
      headers:{"Content-Type" : "application/json"},
      body : JSON.stringify({action : liked ? "unlike" : "like"})
    })

    console.log(await response.json())

    if(response.status >= 200 && response.status < 300)
    {
      setLiked(!liked);
    }

   
 
    else{
      const res = response.json();
      setError(res.message);
      return ;
    }

  }

  finally{
    setFetching(false);
  }
  }

  return (
    <div className='wrapper'>
      <h1>Like Button</h1>
      <button className={`heart ${liked ? "liked"  : ""} `} onClick={handleLike} disabled = {fetching}>
        {fetching ? <ImSpinner8 className='spinner'/> : <FaRegHeart />  }
        {liked ? "liked" : "like" }
         </button>
     
      {
        error && 
        <div className='error'>{error}</div>
      }
    
     
      
    </div>
  )
}

export default Like

