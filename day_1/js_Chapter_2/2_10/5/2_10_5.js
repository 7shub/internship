"use strict";
let message;
let login = prompt('enter your post',);
message =(login == 'Employee')?  'Hello' : 
(login == 'Director') ?  'Greetings': 
(login == '')?   'No login':   '';

alert(message);