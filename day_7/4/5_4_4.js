function extractCurrencyValue(str)
{
    if(str.includes('$'))
        {
            let place=str.indexOf('$');
            str = +(str.substring(0,place) + str.substring(place+1,str.length));
            console.log(str)
            return str;
        }
}
alert( extractCurrencyValue('$120') === 120 );