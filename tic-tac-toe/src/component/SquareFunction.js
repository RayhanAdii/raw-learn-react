import React, { useState } from 'react'

function Square(props) {

  return (
  <div>
    <button onClick={props.onSquareClick} className='square'>{props.value}</button>
  </div>
  )
}

export default Square
