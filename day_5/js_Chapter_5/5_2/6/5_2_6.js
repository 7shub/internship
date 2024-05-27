function random(min, max)
{
  let rand = Math.random()*(max + 1 - min) + min;
  return Math.floor(rand);
}
alert( random(1, 2) ); 
alert( random(1, 3) ); 
alert( random(4, 5) );