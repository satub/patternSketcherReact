import React from 'react';
import {connect} from 'react-redux';

import Pattern from './components/pattern';
import PatternList from './components/patternList';

import Login from './user/login';

import { getPattern, choosePattern, resetPattern , reverseLoop, changeSize, reversePattern, savePattern, savePatternAsNew, rename } from './actions/patternActions';
import { logIn, signUp } from './actions/userActions';

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
    this.signIn = this.signIn.bind(this);
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

    this.props.reverseLoop(this.props.pattern.activePattern.pattern,x,y);
  }

    showReverse(ev){
      ev.preventDefault();
      this.props.reversePattern(this.props.pattern.activePattern.pattern.stitches);
    }

    save(ev){
      ev.preventDefault();
      this.props.savePattern(this.props.pattern.activePattern.pattern, this.props.user);
    }
    saveAsNew(ev){
      ev.preventDefault();
      this.props.savePatternAsNew(this.props.pattern.activePattern.pattern, this.props.user);
    }
    handleName(ev){
      ev.preventDefault();
      let that = ev;
      let newName = that.target.value;
      this.props.rename(this.props.pattern.activePattern.pattern, newName);
    }

    signIn(ev){
      ev.preventDefault();
      let user;
      let pw;
      let pwConf;
      if(ev.target.id === "signup"){
        user = ev.target.newUser.value;
        pw = ev.target.newPass.value;
        pwConf = ev.target.newPassConf.value;
        this.props.signUp(user, pw, pwConf);
      } else if (ev.target.id === "login") {
        user = ev.target.userName.value;
        pw = ev.target.passWord.value;
        this.props.logIn(user, pw);
      }
    }


  render(){
    return (
          <div id="pattern" className="flex flex-wrap col-11 mx-auto p1 border-box clearfix border rounded">
            <Pattern showMe={this.props.user.loggedIn} pattern={this.props.pattern.activePattern.pattern} loops={this.props.pattern.activePattern.pattern.stitches} handleLoop={this.reverseIt} handleClick={this.resize} reset={this.reset} showReverse={this.showReverse} save={this.save} handleName={this.handleName} saveAsNew={this.saveAsNew}/>
            <PatternList patternList={this.props.pattern} zoom={this.choose}/>
            <Login showMe={this.props.user.loggedIn} message={this.props.user.msg} onSubmit={this.signIn}/>
        </div>

    )
  }
}
function mapStateToProps(state) {
  return { pattern: state.pattern, user: state.user }
}
function mapDispatchToProps(dispatch){
  return { getPattern: ()=>(dispatch(getPattern())),
          choosePattern: (all, id)=>(dispatch(choosePattern(all, id))),
          resetPattern: ()=>(dispatch(resetPattern())),
          reverseLoop: (stitches,x,y)=>(dispatch(reverseLoop(stitches,x,y))),
          changeSize: (pattern, change)=>(dispatch(changeSize(pattern,change))),
          reversePattern: (pattern)=>(dispatch(reversePattern(pattern))),
          savePattern: (pattern, user)=>(dispatch(savePattern(pattern, user))),
          savePatternAsNew: (pattern, user)=>(dispatch(savePatternAsNew(pattern, user))),
          rename: (pattern, name)=>(dispatch(rename(pattern, name))),
          logIn: (userName, pass)=>(dispatch(logIn(userName, pass))),
          signUp: (userName,pass,passConf)=>(dispatch(signUp(userName,pass,passConf)))};
}

const connector = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = connector(App);

export default connectedComponent;
