import {useState, useEffect} from 'react'
import axios from 'axios'
import './index.css'

function App() {

    const [todoList, setTodoList] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1);
    const [todosPerPage] = useState(10);


    async function getData(){
        
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=${todosPerPage}`)
            setTodoList(res.data)
            setLoading(false)
        } catch (err) {
            setLoading(false)
            console.log(err)
        }
    }

    useEffect(()=>{getData()}, [currentPage, todosPerPage])

    const handlePageChange=(pageNumbers)=>{
        setCurrentPage(pageNumbers);
    }

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
        <h1>Get TODO</h1>
        <Pagination   
            currentPage={currentPage}
            todosPerPage={todosPerPage}
            totalTodos={200}
            onPageChange={handlePageChange} 
        />
        {todoList.map((todo)=>(
            <div key={todo.id} className='todo'>
            <h3>{todo.title}</h3>
            {todo.completed?<h4 style={{color:'darkgreen'}}>Completed</h4>:<h4 style={{color:'red'}}>Not Completed</h4>}
            </div>
        ))}
        </>
    )
}

function Pagination({ currentPage, todosPerPage, totalTodos, onPageChange }) {

    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalTodos/todosPerPage);i++){
        pageNumbers.push(i);
    }

    return(
        <div className='paginationBox'>
            {pageNumbers.map((number)=>(
                <button key={number} onClick={()=> onPageChange(number)} className={number==currentPage?'active':''} >{number}</button>
            ))}
        </div>
    )
}


export default App
