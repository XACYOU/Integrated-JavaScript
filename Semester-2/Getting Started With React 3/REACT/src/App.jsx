import React from "react";
import ReactDOM from "react-dom";

export default function App(){

  const [taskName, setTaskName]=React.useState("");

  function handleChange(e){
    setTaskName(e.target.value)
  }
  function handleClick(){
    setTaskName('')
  }

  return(
    <>
      <input
        placeholder="Enter your text"
        type="text"
        onChange={handleChange}
        value={taskName} 
      />
      <h2> {taskName} </h2>

      <button onClick={handleClick}> CLEAR </button>
    </>
  )
}