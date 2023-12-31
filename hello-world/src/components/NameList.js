import React from 'react'
import Person from './Person'

// Learn list rendering 


function NameList() {
    const names = ['Ahmad', 'Budi', 'Cici', 'Ahmad']

    //Use this code for rendering list of data (in this case names array)
    //const nameList = names.map((name) => <h2>{name}</h2>)
    
    
    // Using index as key
    //Only use index as key in this one of three condition
    //1: Items on list do not have unique id
    //2: List is static (will not change)
    //3: List will never be reordered or filttered
    const nameList = names.map((name,index) => <h2 key={index}>{name}</h2>)

    /*
    return (
    <div>{nameList}</div>
    )
    */

    //another example
    /*
    const persons = [
        {
          "id": 1,
          "name": "John Doe",
          "age": 28,
          "skill": "Programming"
        },
        {
          "id": 2,
          "name": "Jane Smith",
          "age": 35,
          "skill": "Data Analysis"
        },
        {
          "id": 3,
          "name": "Bob Johnson",
          "age": 22,
          "skill": "Graphic Design"
        },
        {
          "id": 4,
          "name": "Alice Williams",
          "age": 31,
          "skill": "Project Management"
        },
        {
          "id": 5,
          "name": "Sam Brown",
          "age": 25,
          "skill": "Customer Support"
        }
      ]
      
      const personList = persons.map(person => 
        <Person key={person.id} person={person} />
    );
    */
    
    return <div>{nameList}</div>;
}

export default NameList
