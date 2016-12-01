export default function patternListReducer(state = [], action) {
  switch(action.type) {
    case 'GET_PATTERN_LIST':
      return action.payload;
    default:
    return state;
  }
}
