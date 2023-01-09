let a = prompt("Enter a number");
let b = prompt("Enter a number");
let c = prompt("Enter a number");
let d = prompt("Enter a number");

if (a<b && a<c && a<d ) {
    console.log("Min number is:"+a)
}
if (b<a && b<c && b<d ) {
    console.log("Min number is:"+b)
}
if (c<a && c<b && c<d ) {
    console.log("Min number is:"+c)
}
if (d<b && d<c && d<a ) {
    console.log("Min number is:"+d)
}