import React from "react";

function Navbar(props){
    return (
        <div className="nav">
            <h1> {props.navName} </h1>
        </div>
    )
}

function AddingTODO({setTaskLists, taskLists}){

    const [taskName,setTaskName]=React.useState('');

    function handleChange(e){
        setTaskName(e.target.value);
    }

    function handleClick(){
        let newTask={
            id:Date.now() + Math.random() + taskName,
            title:taskName,
            status:false
        }
        const updatedList=[...taskLists,newTask]
        setTaskLists(updatedList);
    }

    return (
        <div className="todoBox">
            <input placeholder="Enter Title..." type="text" onChange={handleChange} value={taskName}/>
            <button onClick={handleClick}>ADD</button>
        </div>
    )
}

function DisplayTODO({taskList, setTaskLists}){

    function deleteTask(taskID){
        const updatedList = taskList.filter((ele)=>ele.id!==taskID)
        setTaskLists(updatedList)
    }

    function toggleStatus(id){
        const updatedTodo= taskList.map((ele)=>{
            return ele.id==id?{...ele,status:!ele.status}:ele
        })
        setTaskLists(updatedTodo);
    }
    
    return (
        <div className="todoList">
            {taskList.map((ele)=>{
                return(
                <div className="indTask" key={ele.id}>
                    <p id="title">{ele.title}</p>
                    {ele.status?<p
                     className="stat"
                     style={{
                        color: ele.status ? 'green' : 'red'
                    }}

                     >Completed</p>:<p>Not Completed</p>}
                    <button id="delete" onClick={()=>deleteTask(ele.id)}>DELETE </button>
                    <button id="toggle" onClick={()=>toggleStatus(ele.id)}>TOGGLE</button>
                </div>
                )
            })}
        </div>
    )
}

export default function Todo(){

    const [taskList,setTaskList]=React.useState([]);


    return (
        <>
            <Navbar navName="Todo App"/>
            <AddingTODO setTaskLists={setTaskList} taskLists={taskList}/>
            <DisplayTODO taskList={taskList} setTaskLists={setTaskList} />
        </>
    )
}