import { useEffect, useState } from 'react'

function Timer(){
  const [count, setCount]=useState(50)

  useEffect(()=>{

    let intervalID=setInterval(()=>{
      setCount((prevCount)=> prevCount-1)
    },1000)

    return()=> {clearInterval(intervalID)}
  },[])

  return (
    <h2>Timer: {count}</h2>
  )
}

function App() {

  const [showTimer, setShowTimer] = useState(true)

  const toggleTimer=()=>{
    setShowTimer((prevShowTimer)=> !prevShowTimer)
  }

  return (
    <>
      <h1> React Timer</h1>
      <button onClick={toggleTimer}>{showTimer?'Hide Timer':'Show TImer'}</button>
      {showTimer && <Timer />}
    </>
    
  )
}

export default App
