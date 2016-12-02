export default function patternReducer(state = {}, action) {
  switch(action.type) {
    case 'GET_PATTERN':
      return action.payload.pattern;
    default:
    return state;
  }
}
