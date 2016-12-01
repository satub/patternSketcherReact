import React from 'react';

export default function PatternList(props){
  return(
    <div id="patternList">
      <ul>
        {props.patterns.map((pattern, i) =>
        <li key={i}>{pattern.name}</li>)}
      </ul>
    </div>
  )
}
