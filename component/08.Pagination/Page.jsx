import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./Page.css"

function Page() {

  const [product ,setProduct] = useState([])

  const FetchData = async ()=>{
    try{
      const response = await axios.get("https://picsum.photos/v2/list");
      setProduct(response.data);
    }
    catch (error){
      console.error("Error Fetching :", error)
    }
  }

  useEffect(()=>{
    FetchData();
  },[])

  return (
    <div>
      { 

      product.length > 0 && <div className='product'> 
        {product.map((item)=>{
          return <span key = {item.id} className='product_single'>
            <img src = {item.download_url} className='img' alt = {item.id}/>
            <span>{item.author}</span>
          </span>
        })
      }
        </div>
     
      }
    
    
      
    </div>
  )
}

export default Page
