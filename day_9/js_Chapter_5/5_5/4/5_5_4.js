function compareNumeric(a, b) {
    if (a < b) return 1;
    if (a == b) return 0;
    if (a > b) return -1;
  }
  let arr = [1,2,3,4,5,6,7,8,9];
  arr.sort(compareNumeric);
  alert( arr );