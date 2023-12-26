import { useState, useEffect } from "react"
import axios from "axios"


function App() {

  const [inpValue,setInpValue]=useState('');
  const [taskList,setTaskList]=useState([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(false);
  const url='http://localhost:3000/todo/'

  async function fetchTask(){
    setLoading(true);
    try {
      let res=await axios.get(url);
      setTaskList(res.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchTask()
  },[])
  
  async function AddTask(){

    try {

      const newTaskList={
        id:Math.random() +inpValue,
        title:inpValue,
        completed:false
      }
      // const updatedTaskList=[...taskList,newTaskList];
      // setTaskList(updatedTaskList);
      await axios.post(url,newTaskList)
      setInpValue('');
      fetchTask();
      
    } catch (error) {
      console.log("Error Adding Task",error);
    }
  }

  async function toggleStatus(id){

    try {
      
      const updatedTaskList= taskList.map((task)=>{
        if(task.id==id){
         return {
          ...task,
          completed:!task.completed
        };
        }else{
        return task
        }
      })
      setTaskList(updatedTaskList);
      await axios.patch(url+id,{completed:updatedTaskList.find((task)=> task.id==id).completed})

    } catch (error) {
      console.log("Error Toggling",error);
    }
  }
  
  async function deleteTask(id){
    await axios.delete(url+id);
    const updatedTaskList= taskList.filter((task)=> task.id!==id);
    setTaskList(updatedTaskList);
  }

  function handleChange(e){
    setInpValue(e.target.value);
  }

  if(loading) {
    console.log('loading');
  }

  if(error){
    console.log('error 404');
  }

  return (
    <>
    <h1 style={{textAlign:"center", fontSize:"50px", marginBottom:'50px'}}>Todo App</h1>
    <div className="inputBox">
      <input className="input" placeholder="Add Task" onChange={handleChange} value={inpValue} />
      <button onClick={AddTask} id="btn" style={{fontSize:'30px'}}> ADD TODO</button>
    </div>

    {loading &&<p style={{textAlign:"center", fontSize:'100px', color:"yellow"}}> Loading... </p>}

    {error &&<p style={{textAlign:"center", fontSize:'100px', color:"red"}}>Error 404</p>}

    <div className="todoBox">
      {taskList.map((task)=>{
        return (
          <div key={task.id} className="todoItem">
            <h3>{task.title}</h3>
            {task.completed ? (
              <h4 style={{ color: "yellowgreen" }}>Completed</h4>
            ) : (
              <h4 style={{ color: "red" }}>Not Completed</h4>
            )}
            <button onClick={()=> toggleStatus(task.id)}> TOGGLE </button>
            <button onClick={()=> deleteTask(task.id) }> DELETE </button>
          </div>

        )
      })}
    </div>
    </>
  )
}

export default App
