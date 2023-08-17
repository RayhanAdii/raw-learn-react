import React, { Component, PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

class ParentComp extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            name: 'Rayhan'
        }
    }
    
    componentDidMount(){
        setInterval(()=> {
            this.setState({
                name: 'Rayhan'
            })
        }, 2000)
    }
    
    
    
render() {
    console.log('PARENT COMPONENT RENDER')
    return (
      <div>
        Parent Component
        <RegComp name = {this.state.name}></RegComp>
        <PureComp name = {this.state.name}></PureComp>
      </div>
    )
  }
}

export default ParentComp
