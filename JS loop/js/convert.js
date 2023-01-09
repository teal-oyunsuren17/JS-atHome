let text = prompt("enter your text");

for(let i=1; i<=text.length/2; i++) {
    let random = Math.floor(Math.random()*text.length);
    text = text[random].toLocaleUpperCase();
}
console.log(text)