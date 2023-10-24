import React from "react";


export default function Counter(){
  const [ count, setCount ]=React.useState(0)

  const counter = ()=>{
    setCount(count+1)
  }

  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={counter}> Click Me </button>
    </>
  )
}