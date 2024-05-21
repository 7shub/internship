"use strict";
let str;
do{str = +(prompt('enter a number',))}
while(isNaN(str));
if(str > 0)
{
    if(str==0)
    {
        alert('0');
    }
    else
    {
        alert('1');
    }
}
else
{
    alert('-1');
}