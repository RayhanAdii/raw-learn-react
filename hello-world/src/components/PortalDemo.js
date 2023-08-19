import React from 'react'
import ReactDOM  from 'react-dom'

// learn to break out component out of root component

function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>
        Portal Demo
    </h1>,
    document.getElementById('portal-root')
  )
}

export default PortalDemo
