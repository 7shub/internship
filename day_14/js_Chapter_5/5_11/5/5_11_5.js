function getLastDayOfMonth(year, month){
  return new Date(year, month + 1, 0).getDate();
}
alert( getLastDayOfMonth(2012, 0) ); // 31
alert( getLastDayOfMonth(2012, 1) ); // 29
alert( getLastDayOfMonth(2013, 1) ); // 28