import React from 'react';
import {connect} from 'react-redux';

import Pattern from './components/pattern';
import PatternList from './components/patternList';

import { getPattern } from './actions/patternActions';

class App extends React.Component {
  constructor(props){
    super(props);
    this.reverseIt = this.reverseIt.bind(this);
    this.choose = this.choose.bind(this);
    console.log(props)
  }

  componentWillMount(){
    this.props.getPattern();
  }

  choose(ev){
    ev.preventDefault();
    debugger;
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
      <PatternList patternList={this.props.pattern} zoom={this.choose}/>
      <Pattern loops={this.props.pattern.activePattern.pattern.stitches} reverse={this.reverseIt}/>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return { pattern: state.pattern }
}
function mapDispatchToProps(dispatch){
  return { getPattern: ()=>(dispatch(getPattern()))};
}

const connector = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = connector(App);

export default connectedComponent;
