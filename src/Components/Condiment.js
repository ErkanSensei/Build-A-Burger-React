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
        if (this.state.selected === true) {
          this.setState({ selected: false })
          this.props.deleteItem(this.props.name)
          return
        }
        this.setState({ selected: true })
        this.props.addItem(this.props.name)
      }}
      >
        {this.props.name}
      </button>
    )
  }
}
