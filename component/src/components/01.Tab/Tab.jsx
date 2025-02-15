import React, { useState } from 'react';
import "./Tab.css";

function Tab() {

  function Home() {
    return <h1>Home Component</h1>
  }

  function About() {
    return <h1>About Component</h1>
  }

  function Contact() {
    return <h1>Contact Component</h1>
  }

  const tabList = [
    {
    id :"a",
    label : "Home",
    Component : Home
  },
  {
  id :"b",
  label : "About",
  Component : About
},
{
id :"c",
label : "Contact",
Component : Contact
}]

const [index, setIndex] = useState(0);

const handleClick = (id)=>{
  setIndex(id);
}

 const Components = tabList[index].Component;

  return (
    <div className='wrapper'>
      <h1>Custom Tab</h1>
    <div className='btn'>
      
      {
        tabList.map((item, index )=>{
          return <button onClick={()=>handleClick(index)} key = {item.id}>{item.label}</button>
        })

      }
    </div>
    <Components />
      
    </div>
  )
}

export default Tab