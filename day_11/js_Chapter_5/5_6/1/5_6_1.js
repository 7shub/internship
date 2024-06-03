let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"];
function unique(arr)
{
 let a = new Set(arr);
 let arr1= Array.from(a)
 return arr1
}
alert(JSON.stringify(unique(values)));