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
