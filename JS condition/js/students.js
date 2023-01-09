let a = "Бат";
let b = "Онц-Дүмд";

let aScore = 67;
let bScore = 59;

let assessment = "";

if(aScore<60 ) {
    assessment = "Маш муу"
} else if (aScore>=60 && aScore<70) {
    assessment = "Хангалттай"
} else if (aScore>=70 && aScore<80) {
    assessment = "Дунд"
} else if (aScore>=80 && aScore<90) {
    assessment = "Сайн"
} else if (aScore>=90 && aScore<=100) {
    assessment = "Маш сайн"
}
console.log(a + "-" + aScore +"-"+ assessment)

if(bScore<60) {
    assessment1 = "Маш муу"
} else if (bScore>=60 && bScore<70) {
    assessment1 = "Хангалттай"
} else if (aScore>=70 && aScore<80) {
    assessment1 = "Дунд"
} else if (aScore>=80 && aScore<90) {
    assessment1 = "Сайн"
} else if (aScore>=90 && aScore<=100) {
    assessment1 = "Маш сайн"
}
console.log(b + "-" + bScore +"-"+ assessment1)
