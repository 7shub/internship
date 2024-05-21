"use strict";
let a = 2;
let x = 1 + (a *= 2);
const node1 = document.createTextNode(a);
const element1 = document.getElementById("a");
element1.appendChild(node1);
const node2 = document.createTextNode(x);
const element2 = document.getElementById("x");
element2.appendChild(node2);