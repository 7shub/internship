"use strict";
let a = prompt('enter a number');
let b = prompt('enter a number');
let result=min(a,b); 
function min(a,b)
{
  if(a<b)
  {return a}
  else
  {return b}
}
alert(result)