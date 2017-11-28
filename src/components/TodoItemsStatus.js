import React from 'react'

function AppropriateEmoji(tasksTodo){
  let emoji = '🤯'
  if (tasksTodo === 0){
    emoji = '👏🎉👯🌞'
  }
  else if (tasksTodo === 1){
    emoji = '🖕'
  }
  else if (tasksTodo === 2){
    emoji = '✌'
  }
  else if (tasksTodo === 3){
    emoji = '🤟'
  }
  return emoji
}

function TodoItemsStatus(props){
  const items = props.items
  const total = items.length
  let message = null
  console.log(`items.length=${total}`)
  let todoStill = 0
  items.forEach((item) => {
    if (!item.completed){
      todoStill += 1
    }
  });

  if (todoStill === 0){
    if (total === 1){
      message = 'You have completed your task!'
    }else if (total === 2){
      message = 'You have completed both of your tasks!'
    }else{
      message = `You have completed all ${total} your tasks!`
    }
  }
  else{
    message = `you still have ${todoStill} tasks to do out of ${total}!`
  }

  return (
    <div>
      { message + AppropriateEmoji(todoStill)}
    </div>
  )
}

export default TodoItemsStatus