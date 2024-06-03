let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(arr){
    let set1= new Set(); 
    let result=[];
    for (let i = 0; i < arr.length; i++) {
        let sorted = arr[i].toLowerCase().split('').sort().join('');
        if(!set1.has(sorted)){
        set1.add(sorted);
        result.push(arr[i]);
        }
    }
    return result;
}
console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"
