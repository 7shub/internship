/*function camelize(str){
    let delloc;
    let array2 = str.split('');
    do{
    delloc = array2.indexOf("-");   
    array2.splice(delloc,1);
    array2[delloc]= array2[delloc].toUpperCase();
    }while(array2.indexOf("-") != -1)
    let out = array2.join("");
    return out;
}
alert(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));*/



//the shorter way to do this code
function camelize(str){
    return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
}alert(camelize("background-color"));