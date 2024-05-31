
let styles = ['Jazz','Blues'];
function append(str){
    styles.push(str);
}
function insMid(str){

    styles[Math.floor(styles.length/2)]=str;
    console.log(styles);
}
append("Rock-n-Roll");
insMid('shubh')