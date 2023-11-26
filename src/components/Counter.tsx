import { useState } from "react"
import classes from './counter.modules.scss'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }
  return (
    <div>
      <h1>{counter}</h1>
      <button className={classes.btn} onClick={increment}>+</button>
    </div>
  )
}

export default Counter