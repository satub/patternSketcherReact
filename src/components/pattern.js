import React from 'react';

import Loop from './loop';

export default function Pattern(props){
  debugger;
  return (
    <div id="stitches">
      {props.loops.map((loop, i) =>
        <Loop key={i} name={loop.loop.name} handleReverse={props.reverse}/>)}
    </div>
  )

}
