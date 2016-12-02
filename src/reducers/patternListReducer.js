export default function patternReducer(state = [], action) {
  switch(action.type) {
    case 'GET_PATTERN_LIST':
      return action.payload.patterns;
    default:
    return state;
  }
}
