/* eslint-disable no-useless-escape */

export function validateEmail(inputEmail){
  const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return emailRegex.test(inputEmail);
};

export function validatePassword(inputPassword) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return passwordRegex.test(inputPassword);
};

export function validateLogin(email, password){
  if(validateEmail(email) && validatePassword(password)){
    return true;
  }
  return false;
}