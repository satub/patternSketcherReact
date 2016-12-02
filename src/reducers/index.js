import {combineReducers} from 'redux';
import patternList from './patternListReducer';
import pattern from './patternReducer';

const rootReducer = combineReducers({
  patternList,
  pattern
})

export default rootReducer;
