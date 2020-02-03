import React from 'react';
import Form from './Form.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Left></Left>
        <Border></Border>
        <Form></Form>
      </header>
    </div>
  );
}

function Left() {
  return (
    <div className="left">
      <Border></Border>
    </div>
  );
}
function Border() {
  return (
    <div className="border">
      
    </div>
  );
}

export default App;
