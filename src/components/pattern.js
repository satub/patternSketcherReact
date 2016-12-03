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
        <table><tbody>
          {tabelify.map((row, i) =>
            <Row key={i} row={row} handleReverse={props.reverse}/>)}
        </tbody></table>
    </div>
  )

}
