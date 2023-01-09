let n = prompt("enter a number");
let inside = "";
for (let i=1; i<=n; i++) {
    for (let j=1; j<=i ; j++) {
        if (j==1) {
            inside += "-"
        }
        inside += j + " ";
    }
    for (let j=1; j<=n-i; j++) {
        inside += " ";
    }
    inside = inside + "\n";
}
console.log(inside);

let nm = prompt("enter a number \'reverse\'");
let output = "";

for(let i=0; i< nm; i++) {
    for(let j=1; j<=nm-i; j++) {
        if (j == 1) {
            output += "-";
        }
        output += nm + 1 - j;
    }
    for(let j=1; j<=i; j++) {
        output += " "
    }
    output += "\n"
}
console.log(output)