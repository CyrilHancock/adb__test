import { useState ,useEffect } from 'react';
import './App.css';

import axios from './axios.js';
import TodoList from './components/TodoList';

export function App() {
 const [input,setInput] =useState();
  const [todoList,setTodoList]=useState([])
 useEffect(()=>{
 try{
  axios.get("todos/")
  .then((response)=>{
    setTodoList(response.data)
  }).catch(err => {
    if (err.response.status === 404) {
      throw new Error(`${err.config.url} not found`);
    }
    throw err;
  });
} catch (err) {
  console.log(err);
}
},[])   

  function change(event)
  {
    setInput(event.target.value)
  }

  
  function submit(event) {
    if(input){
      try{
        axios.post('todos/',{"name":input}).catch(err => {
          if (err.response.status === 404) {
            throw new Error(`${err.config.url} not found`);
          }
          throw err;
        });
      } catch (err) {
        console.log(err);
      }
    
  }
  else
  {
    setInput("")
  }
}
  console.log(todoList);
  return (
    <div className="App">
      <div>
        <h1>List of TODOs</h1>
     
        <li>Learn Docker</li>
        <li>Learn React</li>
        <TodoList todoList={todoList}/>
        
      </div>
      <div>
        <h1>Create a ToDo</h1>
        <form>
          <div>
            <label for="todo">ToDo: </label>
            <input value={input} onChange={change} type="text" />
          </div>
          <div style={{"marginTop": "5px"}}>
            <button onClick={submit}>Add ToDo!</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
