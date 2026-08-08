import { useState } from 'react'
import Card from './Card.jsx'

function App() {
  const [count , setCount] = useState(0)

  const increment = () => {
    setCount(count+1)
  }

  return (
    <>
      <Card value={count} handleClick={increment}>
        <p>Increment Counter!</p>
      </Card>
    </>
  )
}

export default App
