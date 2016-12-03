const BASE_URL = 'https://hidden-oasis-19095.herokuapp.com/api/v1/'

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
export function choosePattern(state, patternId){
  return {
    type: 'CHOOSE_PATTERN', payload: { activePattern: state.patterns[patternId] }
  }
}
