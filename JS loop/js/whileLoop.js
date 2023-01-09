// 1------------------
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2------------------
for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}

// 3------------------
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

// 4------------------
let sum4 = 0;
for (let i = 1; i <= 100; i++) {
  sum4 += i;
}
console.log(sum4);

// 5------------------
let n = Number(prompt("enter number"));
let sum5 = 0;
for (let i = 1; i <= n; i++) {
  console.log(i);
  sum5 += i;
}
console.log(sum5);

// 6------------------
let firstNum = +prompt("enter first number");
if (firstNum == 2 || firstNum == 3 || firstNum % 6 == 5 || firstNum % 6 == 1) {
  console.log("yes it is first number");
} else {
  console.log("no enter fisrt number");
}

// 7------------------
let intervalMin = +prompt("enter interval min value");
let intervalMax = +prompt("enter interval max value");
for(;intervalMin <= intervalMax ; intervalMin++) {
    if(intervalMin == 2 || intervalMin == 3 || intervalMin% 6 == 5 || intervalMin % 6 == 1) {
        console.log(intervalMin);
    } 
}


// 8------------------
let N = +prompt("enter N number");
let factorial = 1;
for( let i=1 ; i<=N; i++) {
    factorial = factorial * i;
}
console.log(factorial)


// 9------------------
let sumNum = prompt("enter number");
let numSum = 0;
for(let i=0; i< sumNum.length ; i++) {
    numSum = numSum + +sumNum[i]
}
console.log(numSum)

// 10------------------ 
let oddN = +prompt("enter number \'print odd\'");
let sumOdd = 0;
for( let i = 1; i <= oddN; i +=2) {
    console.log(i)
    sumOdd += i;
}
console.log(sumOdd);

// 11------------------ 
let evenN = +prompt("enter number \'print even\'");
let sumEven = 0;
for( let i = 0; i <= evenN; i +=2) {
    console.log(i)
    sumEven += i;
}
console.log(sumOdd);

// 12------------------
let reverse = prompt("enter number \'reverse\'");
let reverse1 = "";
for ( let i = reverse.length -1 ; i >= 0 ; i --) {
    reverse1 = reverse1 + reverse[i];
}
console.log(+reverse1)

// 13------------------
let wordNum = prompt("enter number \'convert word\'");
let answer13 = "";
for (let i = 0; i < wordNum.length ; i++) {
    if(wordNum[i]==1)  answer13 = answer13 + "нэг" +","
    if(wordNum[i]==2)  answer13 = answer13 + "хоёр" +","
    if(wordNum[i]==3)  answer13 = answer13 + "гурав" +","
    if(wordNum[i]==4)  answer13 = answer13 + "дөрөв" +","
    if(wordNum[i]==5)  answer13 = answer13 + "тав" +","
    if(wordNum[i]==6)  answer13 = answer13 + "зургаа" +","
    if(wordNum[i]==7)  answer13 = answer13 + "долоо" +","
    if(wordNum[i]==8)  answer13 = answer13 + "найм" +","
    if(wordNum[i]==9)  answer13 = answer13 + "ес" +","
}
console.log(answer13)