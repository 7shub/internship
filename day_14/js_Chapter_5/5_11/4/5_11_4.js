let date = new Date(2015, 0, 2);

function getDateAgo(date, days){
  let result = new Date(date.getTime());
  result.setDate(result.getDate() - days);
  return result;
}
alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)