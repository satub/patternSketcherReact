import React from 'react';
import {connect} from 'react-redux';

import Pattern from './components/pattern';
import PatternList from './components/patternList';

import { getPattern, choosePattern } from './actions/patternActions';

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
    let that = ev;
    let id = that.target.parentElement.attributes[0].value.split("$")[1];
    this.props.choosePattern(this.props.pattern, id);
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
      <div id="pattern" className="flex flex-wrap col-11 mx-auto p1 border-box clearfix border rounded">
      <Pattern loops={this.props.pattern.activePattern.pattern.stitches} reverse={this.reverseIt}/>
      <PatternList patternList={this.props.pattern} zoom={this.choose}/>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return { pattern: state.pattern }
}
function mapDispatchToProps(dispatch){
  return { getPattern: ()=>(dispatch(getPattern())),
          choosePattern: (all, id)=>(dispatch(choosePattern(all, id)))};
}

const connector = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = connector(App);

export default connectedComponent;
