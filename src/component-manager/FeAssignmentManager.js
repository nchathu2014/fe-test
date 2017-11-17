import {__callUserAuthenticationAPI,callback} from './../api/userAthentication';

/**
 * User validation and Authertication
 * @param obj
 */
function validateLoginCredentials(obj) {
  //NOTE: for Testing username:Janet password: Weaver

  const username = obj.username.trim();
  const password = obj.password.trim();

  /**
   * User Authentication
   */
  __callUserAuthenticationAPI((userObj)=> {
      (userObj.username === username && userObj.password === password) ? alert(`Access Granted`) :
                                                                         alert(`Access Denied`);
    },
    (error)=> {
      alert(`ERROR ${error}`)
    });


}

/**
 * username onchange event
 * @param event
 */
function userNameOnChange(event) {
  this.setState({
    txtUsername: event.target.value,
    isDirtyUsername: !this.errorControl(event.target.value)
  });
}

/**
 * password onchange event
 * @param event
 */
function passwordOnChange(event) {
  this.setState({
    txtPwd: event.target.value,
    isDirtyPassword: !this.errorControl(event.target.value)
  })
}

/**
 * Create the object model for loggin
 * @param username
 * @param pwd
 * @returns {{username: *, password: *}}
 */
function createUserCredentialObject(username, pwd) {
  return {
    username: username,
    password: pwd
  }
}

/**
 * Error control of the login form
 * @param formValue
 * @returns {*}
 */
function errorControl(formValue) {
  let valueStatus = null;
  if (formValue) {
    valueStatus = true;
  } else {
    valueStatus = false;
  }
  return valueStatus;
}


//method abstraction with export
module.exports = {
  __userValidation: validateLoginCredentials,
  __userNameOnChange: userNameOnChange,
  __passwordOnChange: passwordOnChange,
  __createUserCredentialObject: createUserCredentialObject,
  __errorControl: errorControl
};
