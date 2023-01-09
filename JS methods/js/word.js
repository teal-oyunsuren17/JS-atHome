// console.log(parameterizeStr("This Is Where I Begin"))


function parameterizeStr (text) {
    text = text.toLowerCase();
    text = text.split(" ");
    text = text.join("-")
    console.log(text)
}
console.log(parameterizeStr("Hello World Baby"));

