"use strict";
let age;
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
age=prompt('enter your age:')
checkAge(age);