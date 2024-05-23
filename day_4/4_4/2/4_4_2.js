let calculator = {
    
    read : function()
    {
        this.a = Number(prompt("Enter a number"));
        this.b = Number(prompt("Enter another number"));
    },
    sum : function()
    {
       return this.a + this.b;
    },
    mul : function()
    {
       return this.a * this.b;
    }
}
calculator.read();
        alert( calculator.sum() );
        alert( calculator.mul() ); 
