import React from 'react';
import {connect} from 'react-redux';

import Pattern from './components/pattern';
import PatternList from './components/patternList';

class App extends React.Component {
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
      <PatternList patterns={this.props.patternList} />
      <Pattern loops={[{name: 'knit'}, {name: 'purl'}, {name: 'knit'}, {name: 'purl'}]} reverse={this.reverseIt}/>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return { patternList: state.patternList }
}
const connector = connect(mapStateToProps);
const connectedComponent = connector(App);

export default connectedComponent;
