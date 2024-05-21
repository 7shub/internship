"use strict";
let login = prompt('enter your Username:',);
if(login == "Admin"){
    let password = prompt('enter your Password:',);
    if(password == "TheMaster"){
        alert('Welcome!');
    }
    else if(password == "" || password == null)
        {
            alert('Canceled');
        }
    else{
        alert('Wrong Password!');
    }
}
else if(login == "" || login == null){
    alert('Canceled');
}
else{
    alert(`I don't know you`);
}