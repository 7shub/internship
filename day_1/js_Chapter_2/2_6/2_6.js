"use strict";

let uname = prompt('what is your name?', `Username`);
alert( `hello ${uname}` ); // ?
const node = document.createTextNode(uname);
const element = document.getElementById("user");
element.appendChild(node);