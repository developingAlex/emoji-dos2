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
    this.setState((prevState) => {
      //get current items
      const alteredItems = prevState.items //this is the data we wish to change
      //find the appropriate item by the index
      const item = alteredItems[index]
      item.completed = !item.completed

      return { //return the changes we recorded
        items: alteredItems
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
