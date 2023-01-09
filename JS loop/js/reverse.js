let number = prompt("enter a number");
let reverse1 = "";
for(let i=number.length-1; i>=0 ; i = i-1 ) {
    reverse1 = reverse1 + number[i]
}
console.log(+reverse1)