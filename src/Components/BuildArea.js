import React, { Component } from 'react'


export default class BuildArea extends Component {
  render() {
    return(
      <div className='buildArea'>
        {this.props.condiments.map((item) => {
          return (<p>{item}</p>)
        })}
      </div>
    )
  }
}
