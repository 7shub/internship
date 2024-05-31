let arr = [5, 3, 8, 1];
function filterRange(arr, a, b){
    return arr.filter(function(item, i, arr){
        return a <= item && item <= b;
});
}
let filtered = filterRange(arr, 1, 4);

        alert( filtered ); // 3,1 (matching values)

        alert( arr ); // 5,3,8,1 (not modified)