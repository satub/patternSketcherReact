const initialState = { patterns: [],
    activePattern: { pattern: {
      name: 'basic', width_loops: 2, height_rows: 2,
      stitches: [
        { side: 0, loop_number: 1, row_number: 1, loop: {id: 1, name: 'knit'}},
        { side: 0, loop_number: 2, row_number: 1, loop: {id: 1, name: 'knit'}},
        { side: 1, loop_number: 1, row_number: 2, loop: {id: 2, name: 'purl'}},
        { side: 1, loop_number: 2, row_number: 2, loop: {id: 2, name: 'purl'}}
      ]
    }
  }
}
export default function patternReducer(state = initialState, action) {
  switch(action.type) {
    case 'GET_PATTERN':
      return state;
    case 'GET_PATTERN_LIST':
      let newState = JSON.parse(JSON.stringify(state));
      newState.patterns = action.payload.patterns
      return newState;
    default:
      return state;
  }
}
