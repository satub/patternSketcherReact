const initialState = { patterns: [],
    activePattern: { pattern: {
      name: 'basic', width_loops: 2, height_rows: 2,
      stitches: [
        { side: 0, pattern_id: "", loop_id: 1, loop_number: 0, row_number: 0, loop: {id: 1, name: 'knit'}},
        { side: 0, pattern_id: "", loop_id: 1, loop_number: 1, row_number: 0, loop: {id: 1, name: 'knit'}},
        { side: 0, pattern_id: "", loop_id: 1, loop_number: 0, row_number: 1, loop: {id: 2, name: 'knit'}},
        { side: 0, pattern_id: "", loop_id: 1, loop_number: 1, row_number: 1, loop: {id: 2, name: 'knit'}}
      ]
    }
  }
}
export default function patternReducer(state = initialState, action) {
  let newState;
  switch(action.type) {
    case 'GET_PATTERN':
      return state;
    case 'SAVE_PATTERN':
      newState = JSON.parse(JSON.stringify(state));
      newState.activePattern = action.payload;
      return newState;
    case 'SAVE_PATTERN_AS_NEW':
      newState = JSON.parse(JSON.stringify(state));
      newState.activePattern = action.payload;
      newState.patterns.push(action.payload.pattern);
      return newState;
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
      newState.activePattern.pattern = action.payload;
      return newState;
    case 'RENAME_PATTERN':
      newState = JSON.parse(JSON.stringify(state));
      newState.activePattern.pattern = action.payload;
      return newState;
    case 'REVERSE_PATTERN':
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
