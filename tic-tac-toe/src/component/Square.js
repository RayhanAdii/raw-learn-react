import React, { useState } from 'react'

function Square() {

    const [value, setValue] = useState('')

    function handleClick(){
        setValue('X')
    }


  return (
    <div>
      <button onClick={handleClick} className='square'>{value}</button>
    </div>
  )
}

export default Square
