let rowCol = +prompt("enter a number");
let inside = "";
for (let i = 1; i <= rowCol; i++) {
  if (i == 1 || i == rowCol) {
    for (let j = 1; j <= rowCol; j++) {
      inside += "* ";
    }
  } else {
    for (let j = 1; j <= rowCol; j++) {
      if (j % rowCol == 1 || j % rowCol == 0) {
        inside += "* ";
      } else {
        inside += "  ";
      }
    }
  }
  inside += "\n";
}
console.log(inside);
