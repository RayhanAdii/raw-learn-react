import React, { Component } from 'react'



class Square extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         value:''
      }
    }

    handleClick = () => {
        this.setState({ value: 'X' });
    }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} className='square'>{this.state.value}</button>
      </div>
    )
  }
}

export default Square
