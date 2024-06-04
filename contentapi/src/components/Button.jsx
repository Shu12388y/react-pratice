import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/counterContext'
function Button() {
    const CounterContext = useContext(counterContext);
  return (
    <>
    <button onClick={()=>CounterContext.setState(CounterContext.state + 1)}>Increment</button>
    <button  onClick={()=>CounterContext.setState(CounterContext.state - 1)}>Decrement</button>
    </>
  )
}

export default Button