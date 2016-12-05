const BASE_URL = 'https://hidden-oasis-19095.herokuapp.com/api/v1/'
const defaultLoop = {id: 1, name: 'knit'};
const TEST_URL2 = 'http://localhost:3000/api/v1/'
const TEST_URL = 'http://localhost:3000/api/v1/patterns/'

export function getPatternList(){
  let patterns = fetch(`${BASE_URL}patterns`).then(function(res){
    return res.json();
  });
    return {
      type: 'GET_PATTERN_LIST', payload: patterns
    }
}

export function savePattern(pattern){
  // debugger;
  let data = {pattern: pattern};
  if(pattern.id){
    fetch(`${BASE_URL}patterns/${pattern.id}`,
      {method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)});
    } else {
      fetch(`${BASE_URL}patterns`,
        {method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)});
    }
  return { type: 'SAVE_PATTERN', payload: {pattern: pattern} }
}

export function savePatternAsNew(pattern){
  let patternAsNew = JSON.parse(JSON.stringify(pattern));
  patternAsNew.id = "";
  let stitches = patternAsNew.stitches.map(function(stitch){
    let stitchAnon = stitch;
    stitch.id ? delete stitchAnon.id : stitchAnon = stitch
    return stitchAnon;
  });
    patternAsNew.stitches = stitches;

  let data = {pattern: patternAsNew};
  fetch(`${BASE_URL}patterns`,
    {method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)});

  return { type: 'SAVE_PATTERN_AS_NEW', payload: {pattern: pattern} }
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

export function reverseLoop(oldForm,x,y){
  let newForm = JSON.parse(JSON.stringify(oldForm));
  let stitches = newForm.stitches.map(function(stitch){
    let newStitch = stitch;
    if (stitch.loop_number == x && stitch.row_number == y){

      stitch.loop.name === 'knit' ? newStitch.loop_id = 2 : newStitch.loop_id = 1
      stitch.loop.name === 'knit' ? newStitch.loop = {id: 2, name: 'purl'} : newStitch.loop = {id: 1, name: 'knit'}

    }
    return newStitch;
  });
  newForm.stitches = stitches
  return { type: 'REVERSE_LOOP', payload: newForm}
}

export function reversePattern(oldForm){
  let stitches = oldForm.map(function(stitch){
    let newStitch = stitch;

    stitch.loop.name === 'knit' ? newStitch.loop_id = 2 : newStitch.loop_id = 1
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
  let pattern_id;
  currentPattern.id ? pattern_id = currentPattern.id : pattern_id = "";

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
      newStitches.push({side:0, loop_number: width, row_number: i, loop_id: defaultLoop.id, pattern_id: pattern_id, loop: defaultLoop});
    }
    editedPattern.stitches = newStitches;
    return {type: 'CHANGE_SIZE', payload: editedPattern};

    case 'plusRow':
    editedPattern.height_rows = height + 1;
    newStitches = editedPattern.stitches;
    for(let i=0; i<width; i++){
      newStitches.push({side:0, loop_number: i, row_number: height, loop_id: defaultLoop.id, pattern_id: pattern_id, loop: defaultLoop});
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
