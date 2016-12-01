import {combineReducers} from 'redux';
import patternList from './patternListReducer';

const rootReducer = combineReducers({
  patternList
})

export default rootReducer;
