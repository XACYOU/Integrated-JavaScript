import React from "react";

export default function Todo(){

    const [text, setText]=React.useState('');
    const [taskList, setTaskList]=React.useState([]);

    function handleChange(e){
        setText(e.target.value);
    }

    function handleClick(){
        const newTask={
            id: Date.now() + Math.random()+text,            
            title:text
        }
        const updateList=[...taskList,newTask];
        setTaskList(updateList);
        setText('');
        console.log(updateList);

    }

    return(
        <>
            <input
                placeholder="Enter task"
                type="text"
                onChange={handleChange}
                value={text}
            />
            <button onClick={handleClick}> ADD Task </button>
            <ol>
                {taskList.map((ele)=>{
                    return <li key={ele.id} >{ele.title}</li>
                })}
            </ol>
        </>
    )
}