import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    counter = counter + 1
    setCounter(counter)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Simple Counter</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue} > Add value</button><br/>
      <button onClick={removeValue}> Remove value</button>
    </>
  )
}

export default App
