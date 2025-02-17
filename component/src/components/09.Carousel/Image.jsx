import React, { useEffect, useState , useRef } from 'react';
import "./Image.css";

function Image() {

  const [images, setImages] = useState([]);
  const [index , setIndex] = useState(0);
  const timeRef = useRef(null);

  const getImage = async ()=>{
    try {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setImages(data);
    }
    catch (error){
      console.log(error)
    }
  }

  useEffect(()=>{
    getImage();
  },[])

  useEffect(()=>{
    if(images.length > 0)
    timeRef.current = setInterval(handleNext , 1000);
  
    return ()=> clearInterval(timeRef.current)
    },[images.length])

  const handleNext =  ()=>{
    setIndex((prevIndex)=>(prevIndex+1) % images.length)
  }

  const handlePrevious = ()=>{
    setIndex((prevIndex)=>(prevIndex-1 + images.length ) % images.length)
  }

  return (
    <div >
      <h1>Image Carousel</h1>
      {
        images.length > 0 && <div className='container' onMouseEnter={()=>clearInterval(timeRef.current)} 
        onMouseLeave={()=>{timeRef.current = setInterval(handleNext ,1000)}}>
          <img src = {images[index].download_url} alt = {images.author}/> 
          </div>
      }

      <span className='left' onClick={handlePrevious}>◀️</span>
      <span className='right' onClick={handleNext}>▶️</span>
    
      </div>
      

  )
}

export default Image
