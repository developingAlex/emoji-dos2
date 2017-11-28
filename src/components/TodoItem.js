import React from 'react'

function TodoItem({
  description
}) {
  return (
    <label>
      <input type='checkbox' />
       { description }
    </label>
  )
}

export default TodoItem