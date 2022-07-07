import React from 'react';
import Total from './Total'
import Header from './Header';
import Content from './Content';




// const Total = (props) => {
//   return (
//     <div>
//       <p>Total Exercise is {props.exercises1+props.exercises2+props.exercises3}</p>
//     </div>
//   )
// }



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  const Part1 = [part1,exercises1]
  const Part2 = [part2,exercises2]
  const Part3 = [part3,exercises3]
  return (
    <div>
      <Header course={course} />
      <Content Part1 = {Part1} Part2 = {Part2} Part3 = {Part3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App;
