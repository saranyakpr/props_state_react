import React, { useState } from 'react'
import Child from './Child'
import './Parent.css'

const Parent = () => {
    const[color,setColor] = useState('black');
    
  return (
    <div className='parent'>
        <input placeholder='enter a color...' onChange={(e)=>{(setColor(e.target.value))}}></input>
        <Child color={color} />
    </div>
  )
}

export default Parent