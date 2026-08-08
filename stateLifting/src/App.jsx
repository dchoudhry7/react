import { useState } from 'react'
import './App.css'
import Display from './Display.jsx'
import Counter from './Counter.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Display value={count}></Display>
    {/* <Counter increment={() => setCount(count+1}></Counter> */}
    <Counter increment={() => setCount((prev) => prev+1)}></Counter>
    </>
  )
}

export default App
