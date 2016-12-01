import React from 'react';

import Pattern from './components/pattern';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.reverseIt = this.reverseIt.bind(this);
  }

  reverseIt(ev){
    ev.preventDefault();
    let that = ev;
    let loopNumber = that.target.attributes[1].value.split("$")[1];
    console.log(loopNumber);
    //dispatch an action with this id and reverse the stitch
  }

  render(){
    return (
      <div id="pattern">
      My first div!
      <Pattern loops={[{name: 'knit'}, {name: 'purl'}, {name: 'knit'}, {name: 'purl'}]} reverse={this.reverseIt}/>
      </div>
    )
  }
}
