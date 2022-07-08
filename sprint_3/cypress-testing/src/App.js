import './App.css';
import React,{useState} from "react"
function App() {
  const [counter,setCounter] =useState(0)
  return (
    <div className="App">
      <h2>Count is {counter}</h2>
      <button className='incre'
       onClick={()=>setCounter((pre)=>pre +1)}
      >Incremnet</button>
      <button className='decre'
       onClick={()=>setCounter((pre)=>pre - 1)}
      >Decrement</button>
    </div>
  );
}

export default App;
