import React from 'react';

import Loop from './loop';

export default function Pattern(props){

  // let tabelify = [];
  // let width = props.pattern.width_loops;
  // for ( let i = props.pattern.stitches.length-1; i > -1; i--){
  //   tabelify.push(props.pattern.stitches[i]);
  // }

  return (
    <div id="stitches" className="col-9 clearfix rounded">
      <h3>Pattern name: {props.pattern.name}</h3>
        <table><tbody>
          <tr>
          {props.pattern.stitches.map((loop, i) =>
            <Loop key={i} name={loop.loop.name} handleReverse={props.reverse}/>)}
          </tr>
        </tbody></table>
    </div>
  )

}

<table border="1">
<tr>
<td>Row 1, Column 1</td>
<td>Row 1, Column 2</td>
</tr>
<tr>
<td>Row 2, Column 1</td>
<td>Row 2, Column 2</td>
</tr>
</table>
