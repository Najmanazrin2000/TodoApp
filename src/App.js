import React, { Component } from 'react';
import './App.css';
import Todos from './Components/todos';

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="text-center" style={{color:"pink",border:"1px solid lightgrey",borderRadius:"5px"}}>ToDo List</h1>
        <Todos />
      </div>
    );
  }
}

export default App;