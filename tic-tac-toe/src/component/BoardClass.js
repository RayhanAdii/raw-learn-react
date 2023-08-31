import React, { Component } from 'react'
import Square from './Square';
import SquareFunction from './SquareFunction'


class BoardClass extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
        status: ''
      }

      this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (i) => {

        // Handler agar jika kotak sudah ada isinya, fungsi tidak dijalankan

        if (this.state.squares[i] || this.calculateWinner(this.state.squares)) return;

        //Menggunakan Konsep Immutability
        // Agar dapat time travel
        //Meng-copy data, lalu mengubah value, lalu nextSquare = Square
        const nextSquares = this.state.squares.slice();

        // jika xIsNext is true, nextSquares[i] = X, else nextSquares[i] = O
        nextSquares[i] = this.state.xIsNext ? 'X' : 'O';

        // Set State
        this.setState({ squares : nextSquares });
        this.setState({ xIsNext : !this.state.xIsNext})

    }

    // Fungsi untuk merender kotak
    renderSquares() {
        return this.state.squares.map((value, index) => (
            <SquareFunction
                key={index}
                value={value}
                onSquareClick={() => this.handleClick(index)}
            />
        ));
    }

    calculateWinner(squares){
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        for(let i = 0; i < lines.length;i++){
            const [a,b,c] = lines[i]

            if(squares[a] && squares[a] === squares[b] && squares[c]){
                return squares[a]
            }

        }
        return false
    }

    statusHandler(squares){
        const winner = this.calculateWinner(squares)
        if(winner){
            this.setState({ status : 'Winner: ' + winner });
        }else{
            this.setState({ status : 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O')})
        }
    }



  render() {
    const winner = this.calculateWinner(this.state.squares);
    const status = winner
        ? 'Winner: ' + winner
        : 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
    <div>
        <div className="board">
            {this.renderSquares()}
        </div>
        <div className='status'>
            {status}
        </div>
    </div>
    )
  }
}

export default BoardClass
