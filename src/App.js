import React, { Component } from 'react';
import logo from './logo.svg';
import TodoItem from './components/TodoItem';
import './App.css';
 

class App extends Component {
  state = {
    items: [
      {description: 'First', completed: true, buttonType: true },
      {description: 'Second', completed: true, buttonType: true },
      {description: 'Third', completed: false, buttonType: true },
      {description: 'Fourth', completed: true, buttonType: true }
    ]
  }

  filterCompletedItems = (items) => {
    const beforeItems = items
    let afterItems = []
    beforeItems.forEach((item) => {
      if (item.completed){
        afterItems.push(item)
      }
    })
    return afterItems    
  }

  filterIncompletedItems = (items) => {
    const beforeItems = items
    let afterItems = []
    beforeItems.forEach((item) => {
      if (!item.completed){
        afterItems.push(item)
      }
    })
    return afterItems
  }
      
  onToggleItem = (index) => { //to handle what happens when the user clicks a checkbox
    this.setState((prevState) => { //this .setState call results in the Render method below being called again.
      //get current items
      const beforeItems = prevState.items //this is the data we wish to change
      const afterItems = beforeItems.map((item, currentIndex) => {
        if (currentIndex === index) { //when we have found the index of the item to change
          
          //the old way:
          //create a copy of the item
          // const copy = Object.assign(
          //   {}, //start with a new blank object
          //   item, //copy state of the existing item (its attributes)
          //   {completed: !item.completed} //overwrite the completed value to be opposite what it was
          // )

          //the modern way:
          const copy = {
            ...item, 
            completed: !item.completed
          }

          //and return it
          return copy
        }
        else{ //return what it was
          return item
        }
      })

      //old original non functional mutative way:
      // //find the appropriate item by the index
      // const item = afterItems[index]
      // item.completed = !item.completed

      return { //return the changes we recorded
        items: afterItems
      }
    })
  }

  render() {
    // const items = this.state.items
    const items = this.state.items
    const total = items.length
    let totalCompleted = 0
    items.forEach((item) => {
      if (item.completed) {
        totalCompleted += 1
      }
    })

    return (
      <div className="App">
        <dl>
          <dt> Total </dt>
          <dd>{ total }</dd>
          <dt> Completed </dt>
          <dd> {totalCompleted }</dd>
        </dl>

        {
          items.map((item, index) => {
            if (item.completed){
              return null
            }
            else{
              return <TodoItem
                key={ index }
                description={ item.description }
                completed = { item.completed }
                buttonType = { item.buttonType }
                onToggleCompleted={
                  () => {
                    console.log('TodoItem onToggleCompleted received', index)
                    this.onToggleItem(index)
                  }
                }
              />
            }
          })
        }
        {
          items.map((item, index) => {
            if (!item.completed){
              return null
            }
            else{
              return <TodoItem
                key={ index }
                description={ item.description }
                completed = { item.completed }
                buttonType = { item.buttonType }
                onToggleCompleted={
                  () => {
                    console.log('TodoItem onToggleCompleted received', index)
                    this.onToggleItem(index)
                  }
                }
              />
            }
          })
        }
      </div>
    );
  }
}

export default App;
