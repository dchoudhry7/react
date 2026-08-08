import React from 'react'
import './Card.css';

const Card = (props) => {
  return (
    <>
      <div className='box'>
        <h1>Counter: {props.value}</h1>
        <button onClick={props.handleClick}>Click me</button>
        <p>{props.children}</p>
      </div>
    </>
  )
}

export default Card
