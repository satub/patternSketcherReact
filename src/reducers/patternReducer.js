const initialState = { patterns: [],
    activePattern: { pattern: {
      name: 'basic', width_loops: 2, height_rows: 2,
      stitches: [
        { side: 0, loop_number: 0, row_number: 0, loop: {id: 1, name: 'knit'}},
        { side: 0, loop_number: 1, row_number: 0, loop: {id: 1, name: 'knit'}},
        { side: 0, loop_number: 0, row_number: 1, loop: {id: 2, name: 'knit'}},
        { side: 0, loop_number: 1, row_number: 1, loop: {id: 2, name: 'knit'}}
      ]
    }
  }
}
export default function patternReducer(state = initialState, action) {
  let newState;
  switch(action.type) {
    case 'GET_PATTERN':
      return state;
    case 'RESET_PATTERN':
      newState = JSON.parse(JSON.stringify(state));
      newState.activePattern = initialState.activePattern;
      return newState;
    case 'GET_PATTERN_LIST':
      newState = JSON.parse(JSON.stringify(state));
      newState.patterns = action.payload.patterns;
      return newState;
    case 'CHOOSE_PATTERN':
      newState = JSON.parse(JSON.stringify(state));
      newState.activePattern.pattern = action.payload.activePattern;
      return newState;
    case 'REVERSE_LOOP':
      newState = JSON.parse(JSON.stringify(state));
      newState.activePattern.pattern.stitches = action.payload;
      return newState;
    case 'CHANGE_SIZE':
      newState = JSON.parse(JSON.stringify(state));
      newState.activePattern.pattern = action.payload;
      return newState;
    default:
      return state;
  }
}
