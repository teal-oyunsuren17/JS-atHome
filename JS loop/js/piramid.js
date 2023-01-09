let n = prompt("enter a number");
let inside = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    inside += " ";
  }
  for (let j = 1; j <= i; j++) {
    inside += "* ";
  }
  inside += "\n";
}
console.log(inside);
