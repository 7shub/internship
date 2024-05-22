function Accumulator(startingValue){
this.sum = 0;
this.read = function() {
        let a = +prompt('enter first number');
        this.sum = this.sum + a;
};

}
let accumulator = new Accumulator();

        accumulator.read();
        accumulator.read();
        alert( "Sum=" + accumulator.read() );