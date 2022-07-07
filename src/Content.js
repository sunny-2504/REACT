import React from 'react';


const Content = (props) => {
    console.log(props);
    return (
      <div>
        <p>{props.Part1[0]} {props.Part1[1]}</p>
        <p>{props.Part2[0]} {props.Part2[1]}</p>
        <p>{props.Part3[0]} {props.Part3[1]}</p>
        
      </div>
    )
}

export default Content

