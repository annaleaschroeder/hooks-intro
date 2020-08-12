import React from 'react'
import { useState } from 'react'

export default App

function App() {
  const [counterValue, setCounterValue] = useState(0)
  const isZero = counterValue === 0 // hier wird eine Const für null gesetzt, um später weniger schreiben zu müssen
  return (
    <div>
      <p>{counterValue}</p>
      <button onClick={countUp}>Increase number</button>
      <button disabled={isZero} onClick={countDown}>
        Decrease
      </button>
    </div>
  )
  function countUp() {
    setCounterValue(counterValue + 1)
  }
  function countDown() {
    !isZero && setCounterValue(counterValue - 1)
    //const isNotZero = !isZero könnte man theoretisch drüber setzen. Alternative: isZero || setCounterValue(counterValue - 1)
  }
}
