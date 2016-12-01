import React from 'react';

import Loop from './loop';

export default function Pattern(props){

  return (
    <div id="stitches">
      {props.loops.map((loop, i) =>
        <Loop key={i} name={loop.name} handleReverse={props.reverse}/>)}
    </div>
  )

}
