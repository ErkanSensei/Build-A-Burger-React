import React, { Component } from 'react'
import Condiment from './Condiment'

export default class ItemPicker extends Component {
  render() {
    return(
      <div className='sideMenu'>
      <Condiment
        name={'Ketchup'}
        addItem={this.props.addItem}
        deleteItem={this.props.deleteItem}
      />
      <Condiment
        name={'Lettuce'}
        addItem={this.props.addItem}
        deleteItem={this.props.deleteItem}
      />
      <Condiment
        name={'Tomato'}
        addItem={this.props.addItem}
        deleteItem={this.props.deleteItem}
      />
      <Condiment
        name={'Meat'}
        addItem={this.props.addItem}
        deleteItem={this.props.deleteItem}
      />
      <Condiment
        name={'Gouda Cheese'} 
        addItem={this.props.addItem}
        deleteItem={this.props.deleteItem}
      />
      </div>
    )
  }
}
