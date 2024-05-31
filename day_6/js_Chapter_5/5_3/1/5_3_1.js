function ucFirst(){
    let str=prompt('enter the string','Shubham')
    str=str[0].toUpperCase()+str.substring(1,(str.length-1));
    alert(str)
}
ucFirst()