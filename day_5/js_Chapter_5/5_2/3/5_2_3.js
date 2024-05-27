function readNumber()
{let number;
  do{
    number = +prompt("Please enter a number:");
    alert(typeof number);
    alert(number);
    alert(isNaN(number))
  }while(Number.isNaN(number)|| number==null)
}
readNumber();