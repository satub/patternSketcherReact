import React from 'react';

import Loop from './loop';

export default function Row(props){
  return(
    <tr>
    {props.row.map((loop, i) =>
      <Loop key={i} name={loop.loop.name} handleReverse={props.handleReverse}/>)}
    </tr>
  )
}
