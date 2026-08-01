import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter,setCounter] = useState(0)

  let increase = () => {
    if(counter < 10) setCounter((counter) => counter+1)
    if(counter < 10) setCounter((counter) => counter+1)
    if(counter < 10) setCounter((counter) => counter+1)
    if(counter < 10) setCounter((counter) => counter+1)
  }

  let decrease = () => {
    if(0 < counter) setCounter(counter-1)
  }

  return (
    <div>
      <h1>Rating: {counter}</h1>
      <div>
        <button onClick={increase}>📈 : {counter}</button>
        <br/>
        <button onClick={decrease}>📉 : {counter}</button>
      </div>
    </div>
  )
}

export default App
