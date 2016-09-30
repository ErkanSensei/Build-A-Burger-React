import React, { Component } from 'react'
import Condiment from './Condiment'

export default class ItemPicker extends Component {
  render() {
    return(
      <div className='sideMenu'>
      <Condiment name={'Ketchup'}/>
      <Condiment name={'Lettuce'}/>
      <Condiment name={'Tomato'}/>
      <Condiment name={'Meat'} />
      <Condiment name={'Gouda Cheese'} />
      </div>
    )
  }
}
