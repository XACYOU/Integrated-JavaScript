import { useState,useEffect } from 'react'

function App() {

  const [count,setcount]=useState(0)

  useEffect(()=>{

    const timer= setTimeout(()=>{
      setcount((prevCount)=>prevCount+1)
    },1000)

    return ()=> clearTimeout(timer)
  },[count])

  return (
    <h1>{count}</h1>
  )
}

export default App
