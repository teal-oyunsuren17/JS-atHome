let randomNum = Math.floor(Math.random()*100) +1;
console.log(randomNum)
let number = prompt("guess the number");

while (number != randomNum) {
    if ( number>randomNum) {
        alert("tanii oruulsan utga ih baina");
    } else {
        alert("tanii oruulsan utga baga baina")
    }
    number = prompt("guess the number");
} 
if( number == randomNum) {
    alert("congratulations")
}

