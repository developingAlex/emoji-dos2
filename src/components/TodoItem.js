import React from 'react'

function TodoItem({
  description,
  completed = false, //if not provided the default will be false
  onToggleCompleted
}) {
  return (
    <label>
      <input 
        type='checkbox' 
        checked={ completed }
        onChange={
          (event) => {
            console.log('Clicked Checbox', description)
            onToggleCompleted()
          }
        } 
      />
       { description }
    </label>
  )
}

export default TodoItem