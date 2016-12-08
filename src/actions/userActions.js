import 'whatwg-fetch';

const TEST_URL = 'http://localhost:3000/login';

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
