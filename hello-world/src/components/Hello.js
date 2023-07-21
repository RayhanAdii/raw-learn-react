import React from "react"; 

// learn the difference between jsx and non-jsx for functional component
// JSX Version
const Hello = () => {
    return(
        <div className = 'dummy-class'>
            <h1>Hello Han</h1>
        </div>
    )
}


//Non JSX Version
//const Hello = () => {
//    return React.createElement('div', {className: "dummy-class"}, React.createElement('h1', null, 'Hello Han without JSX' ))
//}

export default Hello