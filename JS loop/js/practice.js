let num = 5;
let sum = " ";
for (let i = 1; i <= num; i++) {
  sum = sum + i + " ";
  console.log(sum);
}
console.log("---------------");

let sum2 = "";
for (let i = num; i >= 1; i--) {
  for (let k = num; k >= num - i + 1; k--) {
    sum2 = sum2 + k + " ";
  }
  sum2 += "\n";
}
console.log(sum2);
