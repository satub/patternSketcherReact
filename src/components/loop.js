import React from 'react';

export default function Loop(props){

  return(
    <strong className="loopy" onClick={props.handleReverse}>
      {props.name}
    </strong>
  )

}
