import React from 'react'

// Implementing Functional Components
// Pro: Simple, easy, solution without using state
// Use as much as possible

// Can use this function
//function Greet(){
//    return <h1>Hello Rayhan</h1>
//}

//Also this

// eps 9: learn props
// if you want to render attribute, use props.attributeName
// if you want to render children (inside <h1>print this</h1>), use props.children
const Greet = (props) => {

    console.log(props);
    return (
    <div>
        <h1>Hello {props.name} a.k.a {props.heroName}</h1>
        {props.children}
    </div>
    )
}

// if you want to destructure the props, do this
const Greet1 = (props) => {
    const{name, heroName} = props
    console.log(props);
    return (
    <div>
        <h1>Hello {name} a.k.a {heroName}</h1>
        {props.children}
    </div>
    )
}

// or this
const Greet2 = ({name, heroName}) => {
    console.log(props);
    return (
    <div>
        <h1>Hello {name} a.k.a {heroName}</h1>
        {props.children}
    </div>
    )
}



export default Greet