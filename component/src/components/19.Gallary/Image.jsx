import React, { useEffect, useRef, useState } from 'react';
import "./Image.css";

function Image() {

  const [store, setStore] = useState([]);
  const [page, setPage] = useState(1);
  const observerRef = useRef(null);
  const firstRender = useRef(true);

  const getIamge = async ()=>{
    const response = await fetch(`https://picsum.photos/v2/list?limit=28&page=${page}`);
    const data = await response.json();
    setStore((prev)=> [...prev, ...data]);
  }

  useEffect(()=>{
    if(firstRender.current)
      {
      firstRender.current = false;
      return;
    }
    getIamge();
  },[page])

  useEffect(()=>{
    if(observerRef.current){
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver((param)=>{
      if(param[0].isIntersecting)
      {
        setPage((page)=>page+1)
      }
    } , {threshold : 0.5});

  const images = document.querySelectorAll(".images"); // Get all images
  const lastImage = images[images.length - 1]; 
   
   if(lastImage){
    observerRef.current.observe(lastImage);
   }

    return()=>{
      if(lastImage)
      {
        observerRef.current.unobserve(lastImage)
      }
      observerRef.current.disconnect();
    }

  },[store])

  const handleImageLoad = (event) => {
    event.target.classList.add("loaded");
  };

  return (
    <div>
      {
        store.length> 0 && <div className='wrapper'>
          {
            store.map((item, index)=>{
              return <span key={item.id} onClick={()=>handleClick(index)} >
                <img src={item.download_url} alt = {item.author} className='images' loading='lazy'  onLoad={handleImageLoad} />
              </span>
            })
          }
          </div>
      }
      
    </div>
  )
}

export default Image
