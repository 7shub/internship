function unique(arr){
    for(let i = 0 ; i < arr.length - 1 ; i++ )
        {
            for(let j = i + 1 ;j<arr.length;j++)
                {
                    console.log("'"+j,arr[j],arr[i],JSON.stringify(arr));
                    if(arr[i] === arr[j])
                        {
                            arr.splice(j,1);
                            j--;
                            console.log(j,arr[j],arr[i],JSON.stringify(arr))
                        }
                }
        }
    return arr;
}
let strings = ["Hare", "Hare","Krishna", "Hare", "Krishna","Krishna", "Krishna", "Hare", "Hare", ":-O"];

alert( unique(strings) );