import React, { Component } from 'react'
import Square from './Square';


class BoardClass extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        squares: Array(9).fill(null)
      }
    }

    
    

  render() {
    return (
    <div className="board">
        <Square value={this.state.squares[0]}/>
        <Square value={this.state.squares[1]}/>
        <Square value={this.state.squares[2]}/>
        <Square value={this.state.squares[3]}/>
        <Square value={this.state.squares[4]}/>
        <Square value={this.state.squares[5]}/>
        <Square value={this.state.squares[6]}/>
        <Square value={this.state.squares[7]}/>
        <Square value={this.state.squares[8]}/>
    </div>
    )
  }
}

export default BoardClass
