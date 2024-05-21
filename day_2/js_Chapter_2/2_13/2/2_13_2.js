"use strict";
function before(  ){
let i = 0;
while (++i < 5) alert( i );
}
function after(  ){
  let i = 0;
  while (i++ < 5) alert( i );
}
before();
after();