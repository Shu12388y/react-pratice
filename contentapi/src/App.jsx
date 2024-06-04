import './App.css'
import Button from './components/Button'
import { useContext } from 'react'
import { counterContext } from './context/counterContext'
function App() {

  // now use the context in the component
  const CounterState = useContext(counterContext);
  return (
    <>
    Count value {CounterState.state}
    <div style={{display:'flex',flexDirection:"column"}}>

      <Button/>
      <Button/>
      <Button/>
      <Button/>
    </div>

    </>
  )
}

export default App
