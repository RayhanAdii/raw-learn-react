import React from 'react'

// Part of learning list rendering

function Person({person}) {
  return (
    <div>
      <h3>
        Hello, my name is {person.name}, i am {person.age} years old.
     </h3>
    </div>
  )
}

export default Person
