import React from 'react';

import Row from './row';

export default function Pattern(props){

  let tabelify = [];
  let width = props.pattern.width_loops;
  let height = props.pattern.height_rows;
  for (let j = 0; j < height; j++){
    tabelify[j] = props.pattern.stitches.map(function(stitch){
        if(stitch.row_number === j){
          return stitch;
        }
      }
    ).filter(Boolean)
  }


  return (
    <div id="stitches" className="col-9 clearfix rounded">
      <h3>Pattern name: {props.pattern.name}</h3>
      <div id="stitchButtons" className="flex">
        <button id="plusRow" onClick={props.handleClick}>Height +</button>
        <button id="minusRow" onClick={props.handleClick}>Height -</button>
        <button id="plusLoop" onClick={props.handleClick}>Width +</button>
        <button id="minusLoop" onClick={props.handleClick}>Width -</button>
      </div>
      <div id="stitchTable" className ="flex">
        <table><tbody>
          {tabelify.map((row, i) =>
            <Row key={i} row={row} handleLoop={props.handleLoop}/>)}
        </tbody></table>
      </div>
      <div id="patternButtons" className="flex">
        <button onClick={props.reset}>Reset</button>
        <button onClick={props.showReverse}>Show Reverse Side</button>
        <button onClick={props.save}>Save Pattern</button>
        <label>New Pattern:</label>
        <input type="text" onChange={props.handleName}/>
        <button onClick={props.saveAsNew}>Save as New</button>
      </div>
    </div>
  )

}
