import React from 'react';

import Loop from './loop';

export default function Row(props){
  let order = [];

  order = props.row.sort(function (a, b) {
    if (a.loop_number > b.loop_number) {
      return 1;
    }
    if (a.loop_number < b.loop_number) {
      return -1;
    }
    return 0;
  });

  return(
    <tr>
    {order.map((loop, i) =>
      <Loop key={i} name={loop.loop.name} handleLoop={props.handleLoop}/>)}
    </tr>
  )
}
