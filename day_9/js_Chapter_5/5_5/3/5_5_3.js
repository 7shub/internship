let arr = [5, 3, 8, 1];
function filterRange(arr, a, b){
    arr.forEach((item,loc) => {
        if(!(a <= item && item <= b))
            {
                arr.splice(loc,1)
            }
});
}
filterRange(arr, 1, 4);
alert(arr);