// 1----------------
let n = prompt("Дүнгээ оруулнө уу")
let assessment = "";
if (n>=90 && n<=100) {
    assessment = "A"
} else if (n>=80 && n<90) {
    assessment = "B"
} else if (n>=70 && n<80) {
    assessment = "C"
} else if (n>=60 && n<70) {
    assessment = "D"
} else if (n<60) {
    assessment = "F"
}
console.log("Таны үнэлгээ:"+ assessment);

// 2----------------
let month = prompt("enter a month number");
let days = "";
if (month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12) {
    days=31
} else if (month==4 || month==6 || month==9 || month==11 ) {
    days=30
} else if (month==2) {
    days="28 or 29"
} else {
    days = "sariin dugaar oruulna uu"
}
console.log(days)

// 3----------------
let num = prompt("enter provide 3 or 7 check a number");

if(num%3==0 || num%7==0) {
    console.log("correct")
} else {
    console.log("failed try again")
}

// 4----------------
let negaPosi = prompt("check negative or positive number");
if ( +negaPosi < 0) {
    console.log("it is negative number")
} else if (+negaPosi==0) {
    console.log("it is maybe positive number")
}else {
    console.log("it is positive number")
} 

// 5----------------
let weight = prompt("enter your weight'kg'");
let height = prompt("enter your height'cm'");
let index = +weight / Math.pow(+height *0.01,2);
let answer ="";
if (index<=18.5) {
    answer = "Жингийн дутагдалтай"
} else if (index>18.5 && index<=24.9) {
    answer = "Хэвийн"
} else if (index>25 && index<=29.9) {
    answer = "Жингийн илүүдэлтэй"
} else if (index>30 && index<=39.9) {
    answer = "Таргалалттай"
} else if (index>40) {
    answer = "Хэт таргалалттай"
}
console.log(answer)

// 6----------------
let number = prompt("enter a number");
if ( +number%2==0) {
    console.log("it is even number")
} else {
    console.log("it is odd number")
}

// 7---------------- == 4

// 8----------------
let  yearOfBirth = prompt("enter your year of birth");
let old = 2022 - +yearOfBirth;
let generation = "";

if (0<=old && old<=1) {
    generation = "Infant" 
} else if (1<old && old<=3) {
    generation = "Toddler" 
} else if (3<old && old<=5) {
    generation = "Preschool" 
} else if (5<old && old<=12) {
    generation = "Gradeschooler" 
} else if (12<old && old<=18) {
    generation = "Teen" 
} else if (18<old && old<=21) {
    generation = "Young adult" 
} else {
    generation = "Adult"
}
console.log(generation)