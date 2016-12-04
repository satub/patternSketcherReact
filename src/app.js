import React from 'react';
import {connect} from 'react-redux';

import Pattern from './components/pattern';
import PatternList from './components/patternList';

import { getPattern, choosePattern, resetPattern , reverseLoop, changeSize, reversePattern } from './actions/patternActions';

class App extends React.Component {
  constructor(props){
    super(props);
    this.reverseIt = this.reverseIt.bind(this);
    this.choose = this.choose.bind(this);
    this.reset = this.reset.bind(this);
    this.resize = this.resize.bind(this);
    this.showReverse = this.showReverse.bind(this);
    // console.log(props)
  }

  componentWillMount(){
    this.props.getPattern();
  }

  reset(ev){
    ev.preventDefault();
    this.props.resetPattern();
  }

  choose(ev){
    ev.preventDefault();
    let that = ev;
    let id = that.target.parentElement.attributes[0].value.split("$")[1];
    this.props.choosePattern(this.props.pattern, id);
  }

  resize(ev){
    ev.preventDefault();
    let that = ev;
    let change = that.target.id;
    this.props.changeSize(this.props.pattern.activePattern.pattern, change)
  }

  reverseIt(ev){
    ev.preventDefault();
    let that = ev;

    let coordinates = that.target.attributes[1].value.split("$");
    let x = coordinates[2];
    let y = coordinates[1].split(".")[0];
    console.log('x:' + coordinates[2] + ' y:' + coordinates[1]);
    //dispatch an action with this id and reverse the stitch
    this.props.reverseLoop(x,y,this.props.pattern.activePattern.pattern.stitches);
  }

    showReverse(ev){
      ev.preventDefault();
      this.props.reversePattern(this.props.pattern.activePattern.pattern.stitches);
    }

  render(){
    return (
      <div id="pattern" className="flex flex-wrap col-11 mx-auto p1 border-box clearfix border rounded">
      <Pattern pattern={this.props.pattern.activePattern.pattern} loops={this.props.pattern.activePattern.pattern.stitches} reverse={this.reverseIt} handleClick={this.resize} />
      <PatternList patternList={this.props.pattern} zoom={this.choose}/>
      <button onClick={this.reset}>Reset</button>
      <button onClick={this.showReverse}>showReverse</button>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return { pattern: state.pattern }
}
function mapDispatchToProps(dispatch){
  return { getPattern: ()=>(dispatch(getPattern())),
          choosePattern: (all, id)=>(dispatch(choosePattern(all, id))),
          resetPattern: ()=>(dispatch(resetPattern())),
          reverseLoop: (x,y,stitches)=>(dispatch(reverseLoop(x,y,stitches))),
          changeSize: (pattern, change)=>(dispatch(changeSize(pattern,change))),
          reversePattern: (pattern)=>(dispatch(reversePattern(pattern)))};
}

const connector = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = connector(App);

export default connectedComponent;
