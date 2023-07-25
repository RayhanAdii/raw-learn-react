import React, { Component } from 'react'

// Learn Conditional Rendering: Rendering in spesific keadaan
// we want react to render "welcome rayhan" if isLoggedIn is true, and "welcome guest" if isLoggedIn is false

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    

  render() {
    // Method 1: Using If Else
    //   if (this.state.isLoggedIn){
    //       return <div>Welcome Rayhan</div>
    //     }else{
    //       return <div>Welcome Guest</div>           
    //     }

    // Method 2: Element Variable
    // let message
    // if (this.state.isLoggedIn){
    //     message = <div>Welcome Rayhan</div>
    // }else{
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>


    // Method 3: Ternary Conditional Operator
    // return(
    //     this.state.isLoggedIn ? (
    //         <div>Welcome Rayhan</div>
    //     ) : (
    //         <div>Welcome Guest</div>
    //     )
    // )

    // Method 4: short-circuit Operator
    // Render one or nothing
    return this.state.isLoggedIn && <div>Welcome Rayhan</div>
        
    //  return (
    //   <div>
    //     <div>
    //         Welcome Rayhan
    //     </div>
    //     <div>
    //         Welcome Guest
    //     </div>
    //   </div>
    //)
  }
}

export default UserGreeting
