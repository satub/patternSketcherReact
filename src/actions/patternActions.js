const BASE_URL = 'https://hidden-oasis-19095.herokuapp.com/api/v1/'
const defaultLoop = {id: 1, name: 'knit'};

export function getPatternList(){
  let patterns = fetch(`${BASE_URL}patterns`).then(function(res){
    return res.json();
  });
    return {
      type: 'GET_PATTERN_LIST', payload: patterns
    }
}

export function addToPatternList(){
  console.log('Run after save and add the newest pattern to the browser, do not refetch them all?');
}

export function getPattern(){
  return { type: 'GET_PATTERN' }
}

export function resetPattern(){
  return { type: 'RESET_PATTERN' }
}

export function reverseLoop(loop, row, oldForm){
  let stitches = oldForm.map(function(stitch){
    let newStitch = stitch;
    if (stitch.loop_number == loop && stitch.row_number == row){

      stitch.loop.name === 'knit' ? newStitch.loop = {id: 2, name: 'purl'} : newStitch.loop = {id: 1, name: 'knit'}
    }
    return newStitch;
  });
  return { type: 'REVERSE_LOOP', payload: stitches}
}

export function reversePattern(oldForm){
  let stitches = oldForm.map(function(stitch){
    let newStitch = stitch;
    stitch.loop.name === 'knit' ? newStitch.loop = {id: 2, name: 'purl'} : newStitch.loop = {id: 1, name: 'knit'}
    return newStitch;
  });
  return { type: 'REVERSE_PATTERN', payload: stitches}
}

export function changeSize(currentPattern, change){
  let editedPattern = JSON.parse(JSON.stringify(currentPattern));
  let width = currentPattern.width_loops;
  let height = currentPattern.height_rows;
  let newStitches = [];

  switch(change){
    case 'minusLoop':
    editedPattern.width_loops = width - 1;
    newStitches = editedPattern.stitches.map(function(stitch){
        if(stitch.loop_number < width - 1){
            return stitch;
          }
        }
      ).filter(Boolean)
    editedPattern.stitches = newStitches;
    return {type: 'CHANGE_SIZE', payload: editedPattern};

    case 'plusLoop':
    editedPattern.width_loops = width + 1;
    newStitches = editedPattern.stitches;

    for(let i=0; i<height; i++){
      newStitches.push({side:0, loop_number: width, row_number: i, loop: defaultLoop});
    }
    editedPattern.stitches = newStitches;
    return {type: 'CHANGE_SIZE', payload: editedPattern};

    case 'plusRow':
    editedPattern.height_rows = height + 1;
    newStitches = editedPattern.stitches;
    for(let i=0; i<width; i++){
      newStitches.push({side:0, loop_number: i, row_number: height, loop: defaultLoop});
    }
    editedPattern.stitches = newStitches;
    return {type: 'CHANGE_SIZE', payload: editedPattern};

    case 'minusRow':
    editedPattern.height_rows = height - 1;
    newStitches = editedPattern.stitches.map(function(stitch){
        if(stitch.row_number < height - 1){
            return stitch;
          }
        }
      ).filter(Boolean)
    editedPattern.stitches = newStitches;
    return {type: 'CHANGE_SIZE', payload: editedPattern};
    default:
    return {type: 'CHANGE_SIZE', payload: currentPattern}
  }
}

export function choosePattern(state, patternId){
  return {
    type: 'CHOOSE_PATTERN', payload: { activePattern: state.patterns[patternId] }
  }
}
