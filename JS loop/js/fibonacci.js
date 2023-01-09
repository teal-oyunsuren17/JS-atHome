let number = prompt("enter a number");
let firstNum = 0;
let secondNum = 1;
let nextNum ;
let printSeq = ""; 

for (let i=1; i<=number-2; i++) {
    nextNum = firstNum + secondNum;
    printSeq = printSeq + nextNum + " ";
    firstNum = secondNum;
    secondNum=nextNum;
}
console.log("Fibonacci sequence:" + "0" + " " + "1" + " " + printSeq)