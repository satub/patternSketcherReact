import React from 'react';

export default function PatternList(props){
  return(
    <div id="patternList" className="col-3 clearfix rounded">
      <h3>Available Patterns:</h3>
      <ul>
        {props.patternList.patterns.map((pattern, i) =>
        <li key={i} onClick={props.zoom} data={i}>{pattern.name}</li>)}
      </ul>
    </div>
  )
}
