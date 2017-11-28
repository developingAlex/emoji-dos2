import React from 'react'

function TodoItem({
  description,
  completed = false, //if not provided the default will be false
  onToggleCompleted,
  buttonType = false
}) {
  if (buttonType){
    console.log('recognized that buttonType was true')
    const buttonEmoji = completed ? '✅' : '❎'
    return (
      <label>
        <button type='button' onClick={(event)=>{onToggleCompleted()}} >
          { buttonEmoji }
        </button>
        { description }
      </label>
    )
  }
  else{

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
}

export default TodoItem