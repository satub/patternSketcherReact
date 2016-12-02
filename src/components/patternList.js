import React from 'react';

export default function PatternList(props){
  return(
    <div id="patternList">
      <ul>
        {props.patternList.patterns.map((pattern) =>
        <li key={pattern.id} onClick={props.zoom}>{pattern.id}. {pattern.name}</li>)}
      </ul>
    </div>
  )
}
