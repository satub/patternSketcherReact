import React from 'react';

import Pattern from './components/pattern';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.reverseAll = this.reverseAll.bind(this);
  }

  reverseAll(){
    //dispatch an action
  }

  render(){
    return (
      <div id="pattern">
      My first div!
      <Pattern loops={[{name: 'knit'}, {name: 'purl'}, {name: 'knit'}, {name: 'purl'}]} onClick={this.reverseAll}/>
      </div>
    )
  }
}
