"use strict";
let num;
do{
num = prompt('enter a number greater then 100');
}while(num <= 100 && num != null);
if(num > 100){
  alert('"'+num != null+'"');
}