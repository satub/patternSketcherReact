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
    let newActivePattern;
    let newPattern;
    switch(action.type) {
        case 'GET_PATTERN':
            return state;
        case 'SAVE_PATTERN':
            return { ...state, activePattern: action.payload };
        case 'SAVE_PATTERN_AS_NEW':
            newPatternList = [...state.patterns, action.payload.pattern];
            return { ...state, patterns: newPatternList, activePattern: action.payload };
        case 'RESET_PATTERN':
            return { ...state, activePattern: initialState.activePattern };
        case 'GET_PATTERN_LIST':
            return { ...state, patterns: action.payload.patterns };
        case 'CHOOSE_PATTERN':
            newActivePattern = { ...state.activePattern, pattern: action.payload.activePattern };
            return { ...state, activePattern: newActivePattern };
        case 'REVERSE_LOOP':
            newActivePattern = { ...state.activePattern, pattern: action.payload };
            return { ...state, activePattern: newActivePattern };
        case 'RENAME_PATTERN':
            newActivePattern = { ...state.activePattern, pattern: action.payload };
            return { ...state, activePattern: newActivePattern };
        case 'REVERSE_PATTERN':
            newPattern = { ...state.activePattern.pattern, stitches: action.payload };
            newActivePattern = { ...state.activePattern, pattern: newPattern };
            return { ...state, activePattern: newActivePattern };
        case 'CHANGE_SIZE':
            newActivePattern = { ...state.activePattern, pattern: action.payload };
            return { ...state, activePattern: newActivePattern };
        default:
            return state;
      }
}
