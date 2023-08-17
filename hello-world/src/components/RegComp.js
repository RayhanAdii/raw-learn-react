import React, { Component } from 'react'

class RegComp extends Component {
  render() {
    console.log('REGULAR COMPONENT RENDER')
    return (
      <div>
        Regular Component {this.props.name}
      </div>
    )
  }
}

export default RegComp
