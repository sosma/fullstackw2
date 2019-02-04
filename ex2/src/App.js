import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Person = ({ person }) => {
  return (<p>{person.name} {person.number}</p>)
}
const Title = () => (<h2>Puhelinluettelo</h2>)
const App = (props) => {
  const [ persons, setPersons] = useState(props.people)
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const rows = () => persons.map(person =>
    <Person key={person.name} person={person}/>
  )

  const hook = () => {

}

useEffect(hook, [])

  const handlePersonChange = (event) => {
    setNewPerson(event.target.value)
}
const handleNumberChange = (event) => {
  setNewNumber(event.target.value)
}
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newPerson,
      number : newNumber
    }
    var assigned = false
    for(let i in persons){
        if(persons[i].name === personObject.name){
            assigned = true
        }
    }
    if(assigned)
        alert(`${personObject.name} on jo luettelossa`)
     else {
           axios
           .post('http://localhost:3002/persons', personObject)
           .then(response => {setPersons(persons.concat(response.data))})
        // setPersons(persons.concat(personObject))
        setNewPerson('')
        setNewNumber('')
    }
}
  return (
    <div>
      <Title />
      <form onSubmit={addPerson}>
        <div>nimi:
        <input
          value={newPerson}
          onChange={handlePersonChange}/>
        </div>
        <div>numero:
        <input
          value={newNumber}
          onChange={handleNumberChange}/>
        </div>
        <button type="submit">tallenna</button>
      </form>
      <h2>Numerot</h2>
      {rows()}
    </div>
  )

}

export default App
