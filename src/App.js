import React, { Component } from 'react';
import ItemPicker from './Components/ItemPicker'
import BuildArea from './Components/BuildArea'
import './App.css';

const condiments = ['BUN','BUN']

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      condiments: []
    }
  }
  componentWillMount() {
    this.setState({ condiments: condiments })
  }
  addItem = (name) => {
    const temp = this.state.condiments
    temp.splice(1,0,name)
    this.setState({ condiments: temp })
  }
  deleteItem = (name) => {
    let temp = this.state.condiments
    temp = temp.slice(0,temp.indexOf(name)).concat(temp.slice(temp.indexOf(name) + 1, temp.length))
    console.log(temp)
    this.setState({ condiments: temp })
  }
  render() {
    return (
      <div className="App">
        <ItemPicker addItem={this.addItem} deleteItem={this.deleteItem}/>
        <BuildArea condiments={this.state.condiments}/>
      </div>
    );
  }
}

export default App;
