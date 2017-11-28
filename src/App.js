import React, { Component } from 'react';
import logo from './logo.svg';
import TodoItem from './components/TodoItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <TodoItem />

       <TodoItem />

       <TodoItem />
      </div>
    );
  }
}

export default App;
