"use strict";

let login = (username, password) => {
  if (username !== 'admin' || password !== 'pass') {
    console.log('incorrect login');
  } else {
    console.log('correct login');
  }
};

export {
  login
};