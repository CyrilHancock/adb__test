import React from 'react'

const TodoList = ({todoList}) => {
  return (
      <div>
          {todoList.map((list,index)=>{
        return(<li key={index}>{list.name}</li>);
      })}
      </div>
    
  )
}

export default TodoList