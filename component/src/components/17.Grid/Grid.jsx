import React, { useState } from 'react';
import "./Grid.css";

const config = [
  [1,1,1],
  [1,0,1],
  [1,1,1],
]

function Grid() {

  const [stack, setStack] = useState(new Map());      //Map stored Inseration order
  const[isDisable , setIsDisable] = useState(false)    //when setTimeout run do not click div

  const handleClick = (rowindex , colindex)=>{
    return ()=>{
      if (isDisable ) return;
      const newStack  = new Map(stack);
      const key = `${rowindex} - ${colindex}`
      if(newStack.has(key) || !config[rowindex][colindex])
      {
        return ;
      }
        newStack.set(key , true);
        setStack(newStack);

      const lightSelected = config.flat().reduce((a,b)=>{
        return a+b;
      }, 0);

      if(lightSelected === newStack.size)
      {
        startRollBack();
      }
    };
  }

  const startRollBack = ()=>{
    setIsDisable(true);
    const interval = setInterval(() => {
      setStack((prevStack)=>{
        const lastKey = Array.from(prevStack.keys()).pop();
        if (!lastKey) {
          clearInterval(interval);
          setIsDisable(false);                           // Fix: Re-enable clicking after rollback
          return new Map();
        }
        const newStack = new Map(prevStack);
        newStack.delete(lastKey);
        return newStack;

      });
      
    }, 1000);

  }

  return (
    <div className='grid-light'>
      {
        config.map((row, rowindex)=>{
          return <div className='grid-row' key = {rowindex}>
            {row.map((value, colindex)=>{
              let lightClass = ""
              if(value === 0)
              {
                lightClass = "off"
              }
              const key = `${rowindex} - ${colindex}`;
              if(stack.has(key))
              {
                lightClass +="on";
              }
              return <div onClick={handleClick(rowindex , colindex)} className={`light ${lightClass}`} key = {colindex}></div>
            })
            }
            </div>
        })
      }
      
    </div>
  )
}

export default Grid
