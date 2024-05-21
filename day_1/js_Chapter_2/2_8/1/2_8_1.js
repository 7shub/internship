"use strict";
let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?
const node1 = document.createTextNode(a);
const element1 = document.getElementById("a");
element1.appendChild(node1);
const node2 = document.createTextNode(b);
const element2 = document.getElementById("b");
element2.appendChild(node2);
const node3 = document.createTextNode(c);
const element3 = document.getElementById("c");
element3.appendChild(node3);
const node4 = document.createTextNode(d);
const element4 = document.getElementById("d");
element4.appendChild(node4);