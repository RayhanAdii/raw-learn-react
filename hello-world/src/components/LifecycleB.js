import React, { Component } from 'react'

class LifecycleB extends Component {

    // 1st executed
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Rayhan'
      }
      console.log('LifecycleB constructor')
    }

    // 2nd executed
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    // Last Executed
    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }
    

    //3rd executed
  render() {
    console.log('LifecycleB render')

    return (
      <div>
        Lifecycle B
      </div>
    )
  }
}

export default LifecycleB
