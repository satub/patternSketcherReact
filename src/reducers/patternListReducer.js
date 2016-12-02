export default function patternListReducer(state = [], action) {
  switch(action.type) {
    case 'GET_PATTERN_LIST':
      return action.payload.patterns;
    default:
    return state;
  }
}
