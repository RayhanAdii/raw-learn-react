import React, { Component } from 'react'

// Learn more about useState and setState
// take home: don't change value directly, but use setState

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    
    // first approach
    increment(){
        this.setState({
            count: this.state.count + 1
        }, () => {console.log('Callback value: ', this.state.count)})
    }

    // better approach (recommended)
    decrement(){
        this.setState((prevState, props) => ({
            count: prevState.count - 1 // this number "1" can be substituted by props.attName, ex: props.addValue
        }))
        console.log(this.state.count)
    }

  render() {
    return (
      <div>
        <div>
        Count - {this.state.count}
        </div>
        <button onClick={() => this.increment()}> Increment </button>
        <button onClick={() => this.decrement()}> Decrement </button>
      </div>
    )
  }
}

export default Counter
