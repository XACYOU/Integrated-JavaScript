import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [task, setTask] = useState("");

  async function fetchTodo() {
    try {
      const res =
        await axios.get(`https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10
      `);
      setTodoList(res.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      console.log(error)
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTodo();
  }, []);

  async function addTask() {
    if (task.trim() !== "") {
      try {
        const res = await axios.post(
          `https://jsonplaceholder.typicode.com/todos`,
          {
            title: task,
            completed: false,
          }
        );

        const updater = [...todoList, res.data];
        setTodoList(updater);
        setTask("");
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  }
  
  async function toggleStatus(id) {
    try {
      const updated = todoList.map((todo) =>
        todo.id == id ? { ...todo, completed: !todo.completed } : todo
      );
      setTodoList(updated);

      await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
        completed:!todoList.find((todo) => todo.id == id).completed
      })
      setLoading(false);

    } catch (err) {
      console.log("Error Toggling", err);
      setLoading(false);
    }
  }

  async function todoDelete(id) {
    try {
      const updated=todoList.filter((todo) => todo.id !== id)
      setTodoList(updated)

      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      setLoading(false);

    } catch (error) {
      console.log(error)
      setLoading(false);

    }
  }

  if (loading) {
    return  <h1>Loading...</h1>;
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}> TODO - CRUD</h1>
      <div className="inputBox">
        <input
          type="text"
          value={task}
          placeholder="Add Task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>ADD Task</button>
      </div>

      <div className="todoBox">
        {todoList.map((todo) => (
          <div key={todo.id} className="todoItem">
            <h3>{todo.title}</h3>
            {todo.completed ? (
              <h4 style={{ color: "yellowgreen" }}>Completed</h4>
            ) : (
              <h4 style={{ color: "red" }}>Not Completed</h4>
            )}
            <button onClick={() => toggleStatus(todo.id)}>TOGGLE</button>
            <button onClick={()=> todoDelete(todo.id)}>DELETE</button>
          </div>
        ))}
      </div>
    </>
  );
}
