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

export default Welcome