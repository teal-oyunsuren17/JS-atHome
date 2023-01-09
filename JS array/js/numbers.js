let arrayOfNumbers = ["43", "56", "23", "89", "88", "90", "99", "652", "15", "290", "11"];
let sum =0;

// 2-------
for(let i=0; i<arrayOfNumbers.length ; i++) {
    sum += +arrayOfNumbers[i];
}
console.log(sum)

// 3-------
let max = 0;
for (let i=0; i<+arrayOfNumbers.length; i++) {
    while (+arrayOfNumbers[i]>max) {
        max = +arrayOfNumbers[i]; }
}
console.log(max)


// 4-------
let min = +arrayOfNumbers[0];
for (let i=0; i<+arrayOfNumbers.length; i++) {
    while (min>+arrayOfNumbers[i]) {
        min = +arrayOfNumbers[i];  }
} 
console.log(min)


// 5-------
arrayOfNumbers.unshift("1");
console.log(arrayOfNumbers);

// 6-------
arrayOfNumbers.push("78");
console.log(arrayOfNumbers)