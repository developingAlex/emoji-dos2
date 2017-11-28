import React, { Component } from 'react';
import logo from './logo.svg';
import TodoItem from './components/TodoItem';
import './App.css';
 

class App extends Component {
  state = {
    items: [
      {description: 'First', completed: true },
      {description: 'Second', completed: true },
      {description: 'Third', completed: false },
      {description: 'Fourth', completed: true }
    ]
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
    const items = this.state.items

    return (
      <div className="App">
        {
          items.map((item, index) => (
            <TodoItem
              key={ index }
              description={ item.description }
              completed = { item.completed }
              onToggleCompleted={
                () => {
                  console.log('TodoItem onToggleCompleted received', index)
                  this.onToggleItem(index)
                }
              }
            />
          ))
        }
      </div>
    );
  }
}

export default App;
