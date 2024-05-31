let arr = ["HTML", "JavaScript", "CSS"];
let arr2 =[1,2,3,4,5,6,11,]
function copySorted(arr)
{
  let copy = arr.slice(0);
  return copy.sort();
}
let sorted = copySorted(arr2);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)