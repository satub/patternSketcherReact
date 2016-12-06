import {combineReducers} from 'redux';
import pattern from './patternReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  pattern,
  user
})

export default rootReducer;
