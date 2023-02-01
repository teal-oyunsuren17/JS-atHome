let n = prompt("enter a number");
let inside = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    if (j == 1) {
      inside += "-";
    }
    inside += j + " ";
  }
  for (let j = 1; j <= n - i; j++) {
    inside += " ";
  }
  inside = inside + "\n";
}
console.log(inside);

let nm = prompt("enter a number 'reverse'");
let output = "";

for (let i = nm; i >= 1; i--) {
  for (let j = nm; j >= nm - i + 1; j--) {
    if (j == nm) {
      output += "-";
    }
    output += j + " ";
  }
  for (let j = 1; j <= i; j++) {
    output += " ";
  }
  output += "\n";
}
console.log(output);
