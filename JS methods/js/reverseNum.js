let revNum = prompt("enter your number");
let result = "";
for ( let i =0; i<revNum.length; i++) {
    if (i==revNum.length-1) {
        result = result + revNum[i]
    } else {
        result = result + revNum[i] + " ";
    }
}
const words = result.split(' ');
words.reverse();
console.log("Tanii oruulsan utga : ",revNum)
console.log("Tongoruulaad : ",words.join(''));