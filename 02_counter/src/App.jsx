import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    if (counter < 20)
      setCounter(counter + 1)
      // setCounter(prevCounter => prevCounter + 1)
      // To add it multiple times, it has to work this way only since react's usState sends all the updates in ui/variables in batches.
  }

  const removeValue = () => {
    if (counter >0 )
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
