import React from 'react'

const Counter = (props) => {
  return (
    <div>
      <button onClick={props.increment}>+</button>
    </div>
  )
}

export default Counter
