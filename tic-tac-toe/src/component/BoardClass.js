import React, { Component } from 'react'
import Square from './Square';
import SquareFunction from './SquareFunction'


class BoardClass extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        squares: Array(9).fill(null)
      }

      this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (i) => {
        const nextSquares = this.state.squares.slice();
        nextSquares[i] = 'X'
        this.setState({ squares : nextSquares });
    }

    renderSquares() {
        return this.state.squares.map((value, index) => (
            <SquareFunction
                key={index}
                value={value}
                onSquareClick={() => this.handleClick(index)}
            />
        ));
    }


    

  render() {
    return (
    <div className="board">
        {this.renderSquares()}
    </div>
    )
  }
}

export default BoardClass
