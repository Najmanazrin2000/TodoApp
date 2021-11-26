import React, { Component } from 'react';
import './App.css';
import Todos from './Components/todos';

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="text-center" style={{color:"green"}}>ToDo List</h1>
        <Todos />
      </div>
    );
  }
}

export default App;