import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./Page.css"

function Page() {

  const [product ,setProduct] = useState([]);
  const [page, setPage] = useState(1);

  const FetchData = async ()=>{
    try{
      const response = await axios.get("https://picsum.photos/v2/list?limit=50");
      setProduct(response.data);
    }
    catch (error){
      console.error("Error Fetching :", error)
    }
  }

  useEffect(()=>{
    FetchData();
  },[])

  const handleSelectPage = (selectedPage)=>{
    if(selectedPage >= 1 && selectedPage <= product.length && selectedPage !==page);
    setPage(selectedPage)
  }

  return (
    <div>
      { 

      product.length > 0 && <div className='product'> 
        {product.slice(page*10-10, page*10).map((item)=>{
          return <span key = {item.id} className='product_single'>
            <img src = {item.download_url} alt = {item.id}/>
            <span>{item.author}</span>
          </span>
        })
      }
        </div>
      }

      { product.length > 0 && <div className='pagination'>
        <span onClick={()=>handleSelectPage(page-1)} className={page > 1 ? "" : "pagination_disable"}>◀️</span>
        {
        [...Array(product.length/10)].map((_, i)=>{
          return <span key = {i} className={page == i+1 ? "pagination_selected" : ""}   onClick={()=>handleSelectPage(i+1)}>{i+1}</span>
        })
      }
      <span onClick={()=>handleSelectPage(page+1)} className={page < product.length/10 ? "" : "pagination_disable" }>▶️</span>
      </div>
      }
    
      
    </div>
  )
}

export default Page
