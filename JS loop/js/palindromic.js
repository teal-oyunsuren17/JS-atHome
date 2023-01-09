let number = prompt("enter a number");
let digit = number.length-1;

for (let i=0; i<number.length; i++) {
    if (number[i] == number[digit-i]) {
        alert("yes it is palindromic number")
        break;
    } else {
        while (number[i] != number[digit-i]) {
            alert("no it isn\'t palindromic number");
            number = prompt("enter a number");
        } 
    }
}