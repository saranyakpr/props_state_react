import React from 'react'
import './Child.css'

const Child = (props) => {
    console.log(props)
  return (
    <div className='child' style={{backgroundColor:props.color}}></div>
  )
}

export default Child