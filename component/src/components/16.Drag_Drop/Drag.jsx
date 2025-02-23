import React, { useState , useRef } from 'react';
import "./Drag.css"

const initialData = {
  Todo :  ["Design UI Mockups",
  "Setup The Project Repositry",
  "Write a unit Test",
  "Integrate Payment Gateway"
],
"In Progress" : ["Develop Authenticate Flow", "Implement Responsive Design"],
Completed : ["Set up CI/CD pipeline", "Conduct code Service", "Deploy initial vendor to Staging" ]
}


const Drag = () => {

  const[data , setData] = useState(initialData);
  const dragItem = useRef();
  const dragContainer = useRef();

  const handleDrag = (e, item, container)=>{
    e.target.style.opacity = "0.5";
    dragItem.current = item;
    dragContainer.current = container;
  }

  const handleDragEnd = (e)=>{
    e.target.style.opacity = "1";
  }

  const handleDragOver = (e)=>{
    e.preventDefault();
  }

  const handleDrop = (e, targetContainer)=>{
    const item = dragItem.current;
    const sourceContainer = dragContainer.current;
    setData((prev)=>{
      const newData = {...prev};
      newData[sourceContainer] = newData[sourceContainer].filter((i)=> i !== item);
      newData[targetContainer] = [...newData[targetContainer],item];
      return newData;
    })

  }



  return (
    <div>
      <div className='wrapper'>
        {
          Object.keys(data).map((container, index)=>{
            return <div key = {index} className='header' onDragOver={handleDragOver} onDrop={(e)=>handleDrop(e, container)}>{container}
            {
              data[container].map((item, id)=>{
                return <div key = {id} className='content' draggable onDragStart={(e)=>handleDrag(e, item , container)}
                 onDragEnd={handleDragEnd}>{item}</div>
              })
            }
            </div>
          })
        }

      </div>
  
      
    </div>
  )
}

export default Drag
