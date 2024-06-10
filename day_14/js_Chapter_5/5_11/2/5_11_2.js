function getWeekDay(date){
    let weekDay = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU']
    return weekDay[date.getDay()];
    }

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) ); 