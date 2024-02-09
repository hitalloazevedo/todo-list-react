import React, { useEffect, useState } from 'react'
import { Button } from './Button'

const Todo = ({ todo, removeTodo, identifier, completeTodo }) => {
  return (
  <>
    <div className="todo">
        <div className="text-content" style={ {textDecoration : todo.isCompleted ? 'line-through' : '', color: todo.category == 'Importante' ? '#ff5353' : ''}}>
          <div className="content">{todo.text}</div>
          <p className="category" style={ {color: todo.category == 'Importante' ? '#ff5353' : ''} }>({todo.category})</p>
        </div>
        <div className="buttons">
          <Button value="Completar" id="complete" completeTodo={completeTodo} identifier={identifier}/>

          <Button value="X" id="delete" removeTodo={removeTodo} identifier={identifier}/>
        </div>
    </div>
  </>
  )
}

export default Todo