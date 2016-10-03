import React, { Component } from 'react'


export default class BuildArea extends Component {
  render() {
    return(
      <div className='buildArea'>
      <div className='burger'>
        {this.props.condiments.map((item) => {
          return (<p>{item}</p>)
        })}
      </div>
      </div>
    )
  }
}
