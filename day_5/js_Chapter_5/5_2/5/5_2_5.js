function random(min, max)
{
  let rand = Math.random()*(max - min) + min;
  return rand;
}
alert( random(1, 2) ); 
alert( random(1, 3) ); 
alert( random(4, 5) );