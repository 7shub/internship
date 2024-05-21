"use strict";
function before(  ){
let i = 0;
for (let i = 0; i < 5; i++) alert( i );
}
function after(  ){
  let i = 0;
  for (let i = 0; i < 5; ++i) alert( i );
}
before();
after();