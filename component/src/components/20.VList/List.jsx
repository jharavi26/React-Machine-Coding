import React, { useMemo, useState } from 'react';

const Item = Array.from({length:1000}, (_, index)=>index+1);

// console.log(Item)
const Height = 400;
const itemHeight = 35;
const Width = 300;


const List = () => {
  const [indicies, setIndicies] = useState([0, Math.floor(Height/itemHeight)]);

  const visibleList = useMemo(
    ()=>Item.slice(indicies[0], indicies[1]+1),
[indicies],)

  const handleScroll = (e)=>{
  // console.log(e.target.scrollTop);
  const {scrollTop} = e.target;
  const newStartIndex = Math.floor(scrollTop/itemHeight);
  const newEndIndex = newStartIndex + Math.floor(Height /itemHeight);
  setIndicies([newStartIndex, newEndIndex]);

  }


  return (
    <div className='container'  onScroll={handleScroll} style = {{height : Height, width : Width, backgroundColor:"aqua", overflow:"auto"}} >
      <div className='wrapper' style={{height : Item.length*itemHeight , position:"relative" , backgroundColor : "green"}}>
      {
        visibleList.map((value, index)=>{
          return <div className='value'  style={{
            position: "absolute",
            top: (value - 1) * itemHeight,    // Correct positioning
            height: itemHeight,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent:"center",
            textAlign:"center",
            backgroundColor: "coral",
            borderBottom: "1px solid #ddd",
          }} key={value}>{"Value :" + value}</div>
        })
      }</div>
      
    </div>
  ) 
}

export default List;
