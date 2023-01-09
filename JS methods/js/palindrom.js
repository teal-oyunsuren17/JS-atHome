let number = prompt("enter a number between\'100-10000\'");
let result = '';
function checker () {
    for ( let i =0; i<number.length; i++) {
        if (i==number.length-1) {
            result = result + number[i]
        } else {
            result = result + number[i] + " ";
        }
    }
    console.log(result)
    result= result.split(' ');
    console.log(result)
    for ( let i =0; i<result.length ; i++) {
        if (result[0] == result[number.length - 1 - i]) {
            console.log("yes")
        } else {
            console.log("no")
        }
    }
}
checker();