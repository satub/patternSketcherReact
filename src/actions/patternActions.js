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
