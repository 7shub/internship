"use strict";
let flag =true;
let num = prompt('enter a numbe and i will tell u if it is prime or not!!');
for(let i = 2; i < num ;i++)
  {
    if(num % i === 0){
      flag = false;
      break;
    }
  }
  if(flag){
    alert('prime');
  }
  else
  {
    alert('not prime');
  }
    