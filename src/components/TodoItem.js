import React from 'react'

function TodoItem({
  description,
  completed = false, //if not provided the default will be false
  onToggleCompleted,
  onChangeDescription,
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
        <input
          type='text'
          value = {description}
          name= 'description'
          onChange={
            (event) => {
              onChangeDescription(event.target.value)
            }
          }
          />
      </label>
    )
  }
  else{

    return (
      <div>
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
        <input
          type='text'
          value = {description}
          name= 'description'
          onChange={
            (event) => {
              onChangeDescription(event.target.value)
            }
          }
          />
      </div>
    )
  }
}

export default TodoItem