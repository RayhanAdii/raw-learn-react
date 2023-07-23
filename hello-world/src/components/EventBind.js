import React, { Component } from 'react'

// Learn about Binding Event Handler

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

      {/*Method 3: use .bind(this) in constructor, best method!*/}

      this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message:'Goodbye'
        })
    }

    //Method 4: use arrow function while defining the method
    clickHandler1 = () => {
        this.setState({
            message:'Goodbye'
        })

    }

        

  render() {
    return (
      <div>
        <div>
            {this.state.message}
        </div>
        {/*Method 1: use .bind(this) in render method (not reccomend for complex app*/}
        <button onClick={this.clickHandler.bind(this)}>Click</button>
        {/*Method 2: use arrow function in render method*/}
        <button onClick={() => this.clickHandler()}>Click</button>
        {/*Method 3: use .bind(this) in constructor, best method!*/}
        <button onClick={this.clickHandler}>Click</button>
        {/*Method 4: use arrow function while defining the method*/}
        <button onClick={this.clickHandler1}>Click</button>
      </div>
    )
  }
}

export default EventBind
