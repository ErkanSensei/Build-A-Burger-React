import React, { Component } from 'react'


export default class Condiment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
  }

  componentWillMount() {
    this.setState({ selected: false })
  }
  render() {
    let condimentSelected
    if(this.state.selected === false)
    condimentSelected = 'condiment';
    else {
      condimentSelected = 'condimentSelected'
    }
    return(
      <button
      className={condimentSelected}
      onClick={() => {
        this.setState({ selected: !this.state.selected })
      }}
      >
        {this.props.name}
      </button>
    )
  }
}
