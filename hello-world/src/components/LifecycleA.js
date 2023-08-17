import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    // 1st executed
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Rayhan'
      }
      console.log('LifecycleA constructor')
    }

    // 2nd executed
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    // Last Executed
    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }
    

    //3rd executed
  render() {
    console.log('LifecycleA render')

    return (
      <div>
          <div>
            Lifecycle A
          </div>

          {/*If using child component, see the end of file */}
          <LifecycleB/>
      </div>
      
    )
  }
}

export default LifecycleA

/* 
Order of execution if using child component

1. LifecycleA constructor
2. LifecycleA getDerivedStateFromProps
3. LifecycleA render
4. LifecycleB constructor
5. LifecycleB getDerivedStateFromProps
6. LifecycleB render
7. LifecycleB componentDidMount
8. LifecycleA componentDidMount
*/
