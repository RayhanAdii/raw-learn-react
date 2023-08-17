import React from 'react'

function MemoComp({name}) {
    console.log('Rendering Memo Component')
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComp) 

/*
    User Memo Component for equal effect of pure Component
*/
