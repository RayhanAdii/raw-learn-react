import React, { Component } from 'react'

// learn Event Handling on Class

class ClassClick extends Component {
  
  clickHandler(){
    console.log('class clicked')
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me class</button>
      </div>
    )
  }
}

export default ClassClick
