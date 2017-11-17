import {callUserAuthenticationAPI,callback} from './../api/userAthentication';

function validateLoginCredentials(obj) {
    const username = obj.username.trim();
    const password = obj.password.trim();


//let user = callUserAuthenticationAPI();

  let user = callUserAuthenticationAPI();
  setTimeout(()=>{

  },6000)
  console.info(user.username === username)
  console.info(user.password === password)

}


//method abstraction with export
module.exports = {
  userValidation : validateLoginCredentials
};
