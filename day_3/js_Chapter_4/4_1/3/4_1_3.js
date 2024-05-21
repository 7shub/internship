"use strict";
let sum = 0;
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}
let isEmpty = (salaries) =>{
for (let key in salaries){
    sum += salaries[key]; 
}
return sum;
}
alert(isEmpty(salaries));
