import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
  return (

    //For one class
    /*
    <div>
      <h1 className={className}>Stylesheet</h1>
    </div>
    */

    //For multiple classes
    <div>
      <h1 className={`${className} font-xl`}>Stylesheet</h1>
    </div>
  );
}

export default Stylesheet
