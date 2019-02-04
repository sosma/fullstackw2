import React from 'react'

const Header = props =>
  <h1>{props.course}</h1>

const Total = props => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue.exercises;
  const total = props.parts.reduce(reducer, 0)
  return <p>yhteensä {total} tehtävää</p>
}


const Course = ({ course }) => (
  <div>
   <Header course={course.name} />
      {course.parts.map(note => <p key={note.id}>{note.name} {note.exercises}</p>)}
      <Total parts={course.parts}/>
  </div>
)

const Courses = ({ courses }) => (
    <div>
        {courses.map(course => <Course key={course.id} course={course}/>)}
    </div>

)

export default Courses
