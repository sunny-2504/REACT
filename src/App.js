import React from 'react';
import Total from './Total'
import Header from './Header';
import Content from './Content';
import { useState } from 'react';



// const Total = (props) => {
//   return (
//     <div>
//       <p>Total Exercise is {props.exercises1+props.exercises2+props.exercises3}</p>
//     </div>
//   )
// }



// const App = () => {
//   const course = 'Half Stack application development'
//   // const part1 = 'Fundamentals of React'
//   // const part2 = 'Using props to pass data'
//   // const part3 = 'State of a component'
//   // const exercises1 = 10
//   // const exercises2 = 7
//   // const exercises3 = 14
//   // const Part1 = [part1,exercises1]
//   // const Part2 = [part2,exercises2]
//   // const Part3 = [part3,exercises3]

//   // const Part1 = {
//   //   part : 'Fundamentals of React',
//   //   exercises : 10
//   // }
//   // const Part2 = {
//   //   part : 'Using props to pass data',
//   //   exercises : 7
//   // }
//   // const Part3 =  {
//   //   part : 'State of a component',
//   //   exercises : 14
//   // }

//   const Part  = [
//     {
//       part : 'Fundamentals of React',
//       exercises : 10
//     },
//      {
//       part : 'Using props to pass data',
//       exercises : 7
//     },
//      {
//       part : 'State of a component',
//       exercises : 14
//     }
//   ]


//   return (
//     <div>
//       <Header  course={course} />
//       <Content Part = {Part}/>
//       {/* <Content Part = {Part2}/>
//       <Content Part = {Part3}/> */}
//       <Total exercises={Part[0].exercises + Part[1].exercises + Part[2].exercises}/>
//     </div>
//   )
// }
const App = () => {
  const [ counter, setCounter ] = useState(100)

  const handleClick = () => 
    setCounter(counter + 1)
  

  const minusClick = () => 
    setCounter(counter - 1)
  

  const zeroClick = () => 
    setCounter(0)
  

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>
      <button onClick={() => setCounter(counter - 1)}>
        minus
      </button>
      <button onClick={() => setCounter(0)}>
        zero
      </button>
    </div>
  )
}

//  const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   setTimeout(
//     () => setCounter(counter + 1),
//     1000
//   )

//   console.log('rendering...', counter)

//   return (
//     <div>{counter}</div>)
// }



export default App;
