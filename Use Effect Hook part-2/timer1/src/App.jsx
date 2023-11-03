import { useState,useEffect } from 'react'

export default function Timer(){

  const [time,setTime]=useState(0)


  useEffect(()=>{
    const timer=setInterval(() =>{
      setTime((prevTime)=>prevTime+1)
    },1000)

    return ()=> clearInterval(timer)
  },[])
  
  return (
    <h1>{time}</h1>
  )
}