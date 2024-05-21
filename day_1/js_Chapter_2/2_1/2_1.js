"use strict";
const node = document.createTextNode(`"I'm JavaScript!".`);
const element = document.getElementById("p");
element.appendChild(node);
alert( "I'm JavaScript!" );