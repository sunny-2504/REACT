import React from 'react';




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


// const App = () => {
//   const [ counter, setCounter ] = useState(100)

//   const handleClick = () => 
//     setCounter(counter + 1)
  

//   const minusClick = () => 
//     setCounter(counter - 1)
  

//   const zeroClick = () => 
//     setCounter(0)
  

//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={() => setCounter(counter + 1)}>
//         plus
//       </button>
//       <button onClick={() => setCounter(counter - 1)}>
//         minus
//       </button>
//       <button onClick={() => setCounter(0)}>
//         zero
//       </button>
//     </div>
//   )
// }



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



// const App = () => {
//     const notes = ["React Course","Java Course","Nodejs Couser"]
//     const [newNote, setNewNote] = useState(
//       'a new note...'
//     ) 
    
//     const handleNoteChange = (event) => {
//       // console.log(event.target.value)
//       setNewNote(event.target.value)
//       console.log(newNote)
//     }
//     const addNote = (event) => {
//       event.preventDefault()
      
//       console.log('button clicked', event.target)
//     }
   
  
//     return (
//       <div>
//         <h1>Notes</h1>
//         <ul>
//           {notes.map(note => 
//             <li key={note}>{note}</li>
//           )}
//         </ul>
//         <form onSubmit={addNote}>
//           <input 
//           value={newNote}
//           onChange={handleNoteChange}
//           />
//           <button type="submit">save</button>
//         </form>   
//       </div>
//     )
//   }
import Note from './Note'
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = (props) => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('') 

  useEffect(() => {
    axios
        .get('http://localhost:4000/notes')
        .then(response => {
          console.log(response.data)
          setNotes(response.data)
        })
  }, [])

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
  
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>   
    </div>
  )
}

export default App;



