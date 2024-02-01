import React from 'react'
import { useState } from 'react';
import Counter from './counter';


function App() {
    const [count,setCount] = useState(0)
    
    const addCount =()=>{
        setCount(count+1)
        console.log(count)
    }
   
  return (
    <div  className='app'>
        <button onClick={(addCount)}>Add</button>
        <Counter count={count}/>
    </div>
  )
}

export default App