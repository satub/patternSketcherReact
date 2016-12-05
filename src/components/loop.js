import React from 'react';

export default function Loop(props){

  return(
    <td className="loopy" onClick={props.handleLoop}>
      {props.name}
    </td>
  )

}
