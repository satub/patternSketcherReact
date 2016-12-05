import React from 'react';

export default function Loop(props){

  return(
    <td className="loopy" onClick={props.handleLoop}>
      {props.name == 'knit' ? <img src={'../src/images/knit.png'} /> : <img src={'../src/images/purl.png'} />}
    </td>
  )

}
