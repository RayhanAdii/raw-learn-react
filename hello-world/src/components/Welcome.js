import React, {Component} from 'react'

// Implementing Class components
// State
// Complex UI logic
// Provide lifecycle hooks

class Welcome extends Component {
    render(){
        return <h1>Welcome {this.props.name} aka {this.props.heroName}</h1>
    }

}

// if you want to destructure class props, do this
class Welcome1 extends Component {
    render(){
        const {name, heroName} = this.props
        //for state
        // const {state1,state2} = this.state
        return <h1>Welcome {name} aka {heroName}</h1>
    }

}

export default Welcome