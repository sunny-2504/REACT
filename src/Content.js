import React from 'react';


const Content = (props) => {
    console.log(props);
    return (
      <div>
        <p>{props.Part[0].part} {props.Part[0].exercises}</p>
        <p>{props.Part[1].part}  {props.Part[1].exercises}</p>
        <p>{props.Part[2].part}  {props.Part[2].exercises}</p>
        {/* <p>{props.Part2.part2} {props.Part2.exercises2}</p>
        <p>{props.Part3.part3} {props.Part3.exercises3}</p> */}
        
      </div>
    )
}

export default Content

