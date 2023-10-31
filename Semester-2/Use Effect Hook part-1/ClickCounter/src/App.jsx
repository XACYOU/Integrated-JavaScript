import {useState,useEffect} from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    document.title=`Count is ${count}`
  },[count])

  return(
    <button onClick={()=>setCount(count+1)}>Count:{count}</button>
  )
}


