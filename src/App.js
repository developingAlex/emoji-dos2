import React, { Component } from 'react';
import logo from './logo.svg';
import TodoItem from './components/TodoItem';
import './App.css';

const items = [
  {description: 'First', completed: true },
  {description: 'Second', completed: true },
  {description: 'Third', completed: false },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          items.map((item) => (
            <TodoItem
              description={ item.description }
              completed = { item.completed }
            />
          ))
        }
      </div>
    );
  }
}

export default App;
