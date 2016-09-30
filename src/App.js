import React, { Component } from 'react';
import ItemPicker from './ItemPicker'
import BuildArea from './BuildArea'
import logo from './logo.svg';
import './App.css';

const 
class App extends Component {
  render() {
    return (
      <div className="App">
      <ItemPicker />
      <BuildArea />
      </div>
    );
  }
}

export default App;
