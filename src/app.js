import React from 'react';
import {connect} from 'react-redux';

import Pattern from './components/pattern';
import PatternList from './components/patternList';

import { getPatternList, getPattern, choosePattern, resetPattern , reverseLoop, changeSize, reversePattern, savePattern, savePatternAsNew, rename } from './actions/patternActions';

class App extends React.Component {
  constructor(props){
    super(props);
    this.reverseIt = this.reverseIt.bind(this);
    this.choose = this.choose.bind(this);
    this.reset = this.reset.bind(this);
    this.resize = this.resize.bind(this);
    this.showReverse = this.showReverse.bind(this);
    this.save = this.save.bind(this);
    this.handleName = this.handleName.bind(this);
    this.saveAsNew = this.saveAsNew.bind(this);
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
    let id = ev.target.attributes.data.value
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

    this.props.reverseLoop(this.props.pattern.activePattern.pattern,x,y);
  }

    showReverse(ev){
      ev.preventDefault();
      this.props.reversePattern(this.props.pattern.activePattern.pattern.stitches);
    }

    save(ev){
      ev.preventDefault();
      this.props.savePattern(this.props.pattern.activePattern.pattern);
    }
    saveAsNew(ev){
      ev.preventDefault();
      this.props.savePatternAsNew(this.props.pattern.activePattern.pattern);
    }
    handleName(ev){
      ev.preventDefault();
      let that = ev;
      let newName = that.target.value;
      this.props.rename(this.props.pattern.activePattern.pattern, newName);
    }

  render(){
    return (
      <div id="pattern" className="flex flex-wrap col-11 mx-auto p1 border-box clearfix border rounded">
      <Pattern pattern={this.props.pattern.activePattern.pattern} loops={this.props.pattern.activePattern.pattern.stitches} handleLoop={this.reverseIt} handleClick={this.resize} reset={this.reset} showReverse={this.showReverse} save={this.save} handleName={this.handleName} saveAsNew={this.saveAsNew}/>
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
          getPatternList: ()=>(dispatch(getPatternList())),
          choosePattern: (all, id)=>(dispatch(choosePattern(all, id))),
          resetPattern: ()=>(dispatch(resetPattern())),
          reverseLoop: (stitches,x,y)=>(dispatch(reverseLoop(stitches,x,y))),
          changeSize: (pattern, change)=>(dispatch(changeSize(pattern,change))),
          reversePattern: (pattern)=>(dispatch(reversePattern(pattern))),
          savePattern: (pattern)=>(dispatch(savePattern(pattern))),
          savePatternAsNew: (pattern)=>(dispatch(savePatternAsNew(pattern))),
          rename: (pattern, name)=>(dispatch(rename(pattern, name)))};
}

const connector = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = connector(App);

export default connectedComponent;
