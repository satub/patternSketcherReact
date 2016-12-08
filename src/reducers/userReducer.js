const initialState = { token: null, loggedIn: false, msg: 'Please log in'};

export default function userReducer(state=initialState, action){
  let newState;
  switch(action.type) {
    case 'GET_TOKEN':
      if (action.payload.jwt){
        newState = { token: action.payload, loggedIn: true, msg: 'Successfully logged in' }
      } else {
        newState = { token: null, loggedIn: false, msg: 'Login failed. Try again.' }
      }
      return newState;
    case 'SIGN_UP_FOR_TOKENZ':
      if (action.payload.jwt){
        newState = { token: action.payload, loggedIn: true, msg: 'Successfully signed up' }
      } else {
        newState = { token: null, loggedIn: false, msg: 'Signup failed. Make sure to confirm your password.' }
      }
      debugger;
      return newState;
    default:
    return state;
  }
}
