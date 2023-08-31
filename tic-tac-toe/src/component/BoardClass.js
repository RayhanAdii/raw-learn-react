import React, { Component } from 'react'
import Square from './Square';
import SquareFunction from './SquareFunction'


class BoardClass extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true
      }

      this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (i) => {
        //Menggunakan Konsep Immutability
        // Agar dapat time travel
        //Meng-copy data, lalu mengubah value, lalu nextSquare = Square
        const nextSquares = this.state.squares.slice();
        if (this.state.xIsNext){
            nextSquares[i] = 'X'
        } else {
            nextSquares[i] = 'O'
        }
        this.setState({ squares : nextSquares });
        this.setState({ xIsNext : !this.state.xIsNext})
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
