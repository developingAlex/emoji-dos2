import React from 'react'

function TodoItem({
  description,
  completed = false //if not provided the default will be false
}) {
  return (
    <label>
      <input 
        type='checkbox' 
        checked={ completed }
        onChange={
          (event) => {
            console.log('Toggled', description)
          }
        } 
      />
       { description }
    </label>
  )
}

export default TodoItem