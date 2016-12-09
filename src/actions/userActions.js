import 'whatwg-fetch';

const TEST_URL = 'http://localhost:3000/login';
const TEST_URL2 = 'http://localhost:3000/signup';

export function logIn(user, pw){
  let data = {auth: { user_name: user, password: pw }};
  let jwtToken;

  jwtToken = fetch(TEST_URL,
    { method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).then(function(res){
      return res.json();
    });
      return { type: 'GET_TOKEN', payload: jwtToken }
}

export function signUp(user, pw, pwConf){
  let data = {user: { user_name: user, password: pw, password_confirmation: pwConf }};
  let data2 = {auth: { user_name: user, password: pw }};
  let userData;
  userData = fetch(TEST_URL2,
    { method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).then(function(res){
      // return res.json();
      if(res.json().err){
        return res.json();
      } else {
        let stuff = fetch(TEST_URL,
          { method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data2)
          }).then(function(res){
            return res.json();
          });
          return stuff;
        }
    });

  return { type: 'SIGN_UP_FOR_TOKENZ', payload: userData }
}
