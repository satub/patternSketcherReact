import React from 'react';

export default function PatternList(props){
  let display;
  if (props.patternList.patterns.length >= 1){
    display = "none";
  }

  return(
    <div id="patternList" className="col-3 clearfix rounded">
      <h3>Available Patterns:</h3>
      <div id="loading" style={{display}}>
        <p>Loading...</p>
        <img src={'../src/images/catKnitting.png'} />
      </div>
      <div id="listWrapper">
        <ul>
          {props.patternList.patterns.map((pattern, i) =>
          <li key={i} onClick={props.zoom} data={i}>{pattern.name}</li>)}
        </ul>
      </div>
    </div>
  )
}
