import React from 'react';

import Loop from './loop';

export default function Pattern(props){

  return (
    <div id="stitches" className="col-9 clearfix rounded">
      {props.loops.map((loop, i) =>
        <Loop key={i} name={loop.loop.name} handleReverse={props.reverse}/>)}
    </div>
  )

}
