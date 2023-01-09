// 1----------
let year = prompt("enter the current year");
let month = prompt("enter the current month");
let day = prompt("enter the current day");

if (month.length == 1) {
    month = "0" + month
}
if (day.length == 1) {
    day = "0" + day
}
console.log(`\"${year}-${month}-${day}\"`);

// 2----------
let number = prompt("enter your phone number");
console.log(number[0])
let answer;
if  ( number.length == 8) {
    if (number.substring(0,1) == 83 || number.substring(0,1) == 93 || number.substring(0,1) == 97 || number.substring(0,1) == 98) {
        answer = "it is G-MOBILE number"
    } 
    if (number.substring(0,1) == 85 || number.substring(0,1) == 94 || number.substring(0,1) == 95 || number.substring(0,1) == 99) {
        answer = "it is MOBICOM number"
    } 
    if (number.substring(0,1) == 80 || number.substring(0,1) == 86 || number.substring(0,1) == 88 || number.substring(0,1) == 89) {
        answer = "it is UNITEL number"
    } 
    if (number.substring(0,1) == 90 || number.substring(0,1) == 91 || number.substring(0,1) == 96) {
        answer = "it is SKYTEL number"
    } 
} else {
    answer = "орны тоо буруу байна дугаараа шалгана уу"
}
console.log(answer)