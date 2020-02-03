import React from 'react';
import Form from './Form.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Left></Left>
        <Form></Form>
      </header>
    </div>
  );
}

function Left() {
  return (
    <div className="left">
    <ul className="menu">
      <a href="#"><li>Link 1</li></a>
      <li>Link 2</li>
      <li>Link 3</li>
      <li>Link 4</li>
    </ul>
    </div>
  );
}


export default App;
