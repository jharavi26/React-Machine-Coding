import React from 'react';
import data from "./data.json"
import Display from './Display';;
import "./Style.css"

function Accordian() {
  return (
    <div>
      <h1>FAQ</h1>
      {
        data.faq.map((obj , index)=>{
          return <Display faq = {obj} key = {index}/>
        })
      
      }
    </div>
  )
}

export default Accordian
