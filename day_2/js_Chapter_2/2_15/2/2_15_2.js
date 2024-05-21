"use strict";
let age=prompt('enter your age:');
checkAge_questionmark(age);
function checkAge_questionmark(age) {
let result = (age > 18)? true: confirm('Do you have permission from your parents?');
return result;
}
function checkAge_OR(age) {
  return age>18||confirm('Did parents allow you?');
  }