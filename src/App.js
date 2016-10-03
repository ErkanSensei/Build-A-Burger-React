import React, { Component } from 'react';
import ItemPicker from './Components/ItemPicker'
import BuildArea from './Components/BuildArea'
import logo from './logo.svg';
import './App.css';

const condiments = ['BUN']

class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemPicker />
        <BuildArea condiments={condiments}/>
      </div>
    );
  }
}

export default App;
