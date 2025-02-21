import React, { useEffect, useState , useRef } from 'react';
import "./Style.css";

function Infinite() {

  const [product , setProduct] = useState([]);
  const [page , setPage] = useState(1);
  const observerRef = useRef(null);
  const firstRender = useRef(true);

const getData = async ()=>{
  const response  = await fetch (`https://dummyjson.com/products?limit=5&skip=${(page - 1) * 5}`)
  const data = await response.json();
  setProduct((prev)=>[...prev , ...data.products]);
  }

  useEffect(()=>{
    if(firstRender.current)
    {
      firstRender.current = false;
      return;
    }
    getData();
    
  },[page]);

  useEffect(()=>{
    if(observerRef.current){
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver((param)=>{
      if(param[0].isIntersecting)
      {
        setPage((page)=>page+1)
      }
    }, {threshold : 0.5});

         const images = document.querySelectorAll(".images");
         const lastImage = images[images.length - 1];

         observerRef.current.observe(lastImage);

         return()=>{
          if(lastImage)
          {
            observerRef.current.unobserve(lastImage)
          }
          observerRef.current.disconnect();
         }
        
  },[product])

 
  return (
    <div>
      <h1>Infinite Scroll </h1>
      {  product.length > 0 && <div className='page'>
        {
          product.map((item, index)=>{
            return <span key = {item.id} >
              <img src = {item.thumbnail} alt = {item.tile} className='images'/>
              </span>
          })
        }
        </div>

      }
      
    </div>
  )
}

export default Infinite
