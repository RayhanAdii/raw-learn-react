import React from 'react'

// Learn event handling for function

function FunctionClick() {

  function clickHandler(){
    console.log("button clicked")
  }

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
