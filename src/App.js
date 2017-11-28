import React, { Component } from 'react';
import logo from './logo.svg';
import TodoItem from './components/TodoItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <TodoItem description='hello'/>

       <TodoItem description='there'/>

       <TodoItem description='alex'/>
      </div>
    );
  }
}

export default App;
